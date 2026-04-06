import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const SmartCityDmx = () => {
  const [waveOffset, setWaveOffset] = useState(0);
  const [activeTab, setActiveTab] = useState(0); // 💡 하드웨어 탭 상태 관리

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveOffset((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const renderNodes = (isDmx: boolean) => {
    const nodes = [];
    const totalNodes = 20;

    for (let i = 0; i < totalNodes; i++) {
      const x = (i / (totalNodes - 1)) * 100;
      const y =
        Math.pow((i - (totalNodes - 1) / 2) / ((totalNodes - 1) / 2), 2) * 50 +
        20;

      const hue = (waveOffset + i * 15) % 360;
      const color = isDmx ? `hsl(${hue}, 100%, 50%)` : "#fb923c";
      const glow = isDmx
        ? `0 0 15px ${color}`
        : "0 0 8px rgba(251, 146, 60, 0.6)";

      nodes.push(
        <div
          key={i}
          className="absolute rounded-full transition-all duration-75"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: isDmx ? "8px" : "6px",
            height: isDmx ? "8px" : "6px",
            backgroundColor: color,
            boxShadow: glow,
            transform: "translate(-50%, -50%)",
          }}
        />,
      );

      nodes.push(
        <div
          key={`wire-${i}`}
          className="absolute w-[1px] opacity-40 transition-all duration-75"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            bottom: "20%",
            backgroundColor: color,
            boxShadow: glow,
          }}
        />,
      );
    }
    return nodes;
  };

  // 💡 하드웨어 스펙 데이터
  const hardwareList = [
    {
      id: "master",
      name: "ArtNet to DMX 제어기",
      badge: "메인 컨트롤러",
      badgeColor: "text-flolim bg-flolim/10 border-flolim/30",
      image: "/images/dmx-master.png",
      desc: "이더넷 프로토콜을 완벽하게 지원하며 다채널 매핑에 최적화된 마스터 컨트롤러입니다. 대규모 미디어 파사드 및 경관 조명 시스템의 두뇌 역할을 수행하여 지연 없는 완벽한 동기화를 제공합니다.",
      specs: [
        { label: "통신 프로토콜", value: "ArtNet, DMX512, SPI 등 표준 지원" },
        { label: "제어 채널", value: "최대 8 Universes (총 4,096 채널)" },
        { label: "디스플레이", value: "직관적인 OLED 스크린 및 터치 버튼" },
      ],
    },
    {
      id: "cv-decoder",
      name: "4채널 정전압(CV) 디코더",
      badge: "서브 컨트롤러 (정전압)",
      badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
      image: "/images/dmx-decoder-cv.png",
      desc: "정전압(Constant Voltage) 방식의 LED 라인 조명, 투광기 등을 정밀하게 제어합니다. 16비트의 부드러운 디밍(Dimming) 기술을 통해 계단 현상 없는 자연스러운 빛의 흐름을 연출합니다.",
      specs: [
        { label: "입력/출력", value: "DC 12-48V / 4채널 (최대 24A 지원)" },
        { label: "지원 기능", value: "DMX512 수신 및 RDM 양방향 통신" },
        {
          label: "보호 회로",
          value: "과열(OTP), 과전류(OCP), 단락(SCP) 자동차단",
        },
      ],
    },
    {
      id: "cc-decoder",
      name: "4채널 정전류(CC) 디코더",
      badge: "서브 컨트롤러 (정전류)",
      badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
      image: "/images/dmx-decoder-cc.png",
      desc: "정전류(Constant Current) 방식의 고출력 LED 전구를 안전하고 세밀하게 제어하는 디코더입니다. 다양한 현장 조명 사양에 맞춰 딥스위치(DIP Switch)로 세밀한 출력 전류 세팅이 가능합니다.",
      specs: [
        { label: "입력/출력", value: "입력 DC 12-48V / 출력 DC 3-42V" },
        { label: "전류 가변", value: "300mA ~ 1050mA (스위치 수동 설정)" },
        { label: "지원 기능", value: "DMX512 수신 및 RDM 양방향 모니터링" },
      ],
    },
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader
        category="Network Solution"
        title="DMX512 랜드마크 경관 제어"
        subtitle={
          <>
            단순한 점등을 넘어,{" "}
            <strong className="text-flolim font-bold">
              도시의 랜드마크를 거대한 예술 작품으로 만드는
            </strong>{" "}
            미디어 파사드 솔루션
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-flolim/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          {/* 1. 직관적 Before & After 비교 섹션 */}
          <div className="mb-20 md:mb-24 relative z-10">
            <div className="text-center mb-8 md:mb-12 px-2">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4 break-keep">
                왜 DMX 솔루션이 필요한가요?
              </h2>
              <p className="text-slate-400 font-light text-xs md:text-sm break-keep">
                일반 조명과 플로림 DMX 스마트 조명의 결정적 차이를 눈으로
                확인하세요.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* VS 뱃지 */}
              <div className="hidden lg:flex absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-slate-900 border-4 border-slate-800 rounded-full items-center justify-center font-black text-lg text-slate-500 shadow-2xl">
                VS
              </div>

              {/* [좌측] 기존 일반 조명 (Before) */}
              <div className="bg-[#050b14] rounded-3xl border border-slate-700 overflow-hidden flex flex-col grayscale-[20%] opacity-80 shadow-inner group">
                <div className="p-4 md:p-6 border-b border-slate-700 bg-slate-900 flex justify-between items-center relative z-10">
                  <h3 className="text-base md:text-lg font-bold text-slate-300 break-keep">
                    기존 일반 경관 조명
                  </h3>
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap">
                    단방향 제어
                  </span>
                </div>

                <div className="relative w-full h-[200px] md:h-[300px] bg-[#020617] overflow-hidden flex items-end pb-8 md:pb-12 px-6 md:px-8 border-b border-slate-800/50 z-10">
                  <div className="absolute bottom-8 md:bottom-12 left-[15%] w-4 md:w-6 h-24 md:h-40 bg-slate-800"></div>
                  <div className="absolute bottom-8 md:bottom-12 right-[15%] w-4 md:w-6 h-24 md:h-40 bg-slate-800"></div>
                  <div className="absolute bottom-8 md:bottom-12 left-0 w-full h-2 md:h-3 bg-slate-700"></div>
                  <div className="absolute inset-0 w-full h-full pb-8 md:pb-12 px-6 md:px-8">
                    {renderNodes(false)}
                  </div>
                </div>

                <div className="p-6 md:p-8 grow bg-slate-900/30 relative z-10">
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-2 md:gap-3">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-slate-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="text-slate-400 text-xs md:text-sm break-keep">
                        전체를 한 번에 켜고 끄는 단순 제어만 가능
                      </span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-slate-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="text-slate-400 text-xs md:text-sm break-keep">
                        단일 색상으로 밋밋하고 정적인 야경 연출
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* [우측] 플로림 DMX 솔루션 (After) */}
              <div className="bg-[#050b14] rounded-3xl border border-flolim/40 shadow-[0_0_30px_rgba(24,169,198,0.15)] overflow-hidden flex flex-col relative transform lg:scale-105 z-10 transition-transform duration-300 group hover:border-flolim/60">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-flolim/10 via-purple-500/10 to-flolim/10 opacity-50 z-0 pointer-events-none"></div>

                <div className="relative z-10 p-4 md:p-6 border-b border-slate-700 bg-slate-900 flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2 break-keep">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-flolim"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    플로림 DMX512 제어
                  </h3>
                  <span className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold text-slate-900 bg-flolim px-2 md:px-3 py-1 md:py-1.5 rounded-lg shadow-[0_0_10px_#18A9C6] whitespace-nowrap">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-ping"></span>{" "}
                    미디어 아트
                  </span>
                </div>

                <div className="relative z-10 w-full h-[200px] md:h-[300px] bg-[#020617] overflow-hidden flex items-end pb-8 md:pb-12 px-6 md:px-8 border-b border-slate-800/50">
                  <div className="absolute bottom-8 md:bottom-12 left-[15%] w-4 md:w-6 h-24 md:h-40 bg-slate-800 shadow-[0_0_20px_rgba(24,169,198,0.3)]"></div>
                  <div className="absolute bottom-8 md:bottom-12 right-[15%] w-4 md:w-6 h-24 md:h-40 bg-slate-800 shadow-[0_0_20px_rgba(24,169,198,0.3)]"></div>
                  <div className="absolute bottom-8 md:bottom-12 left-0 w-full h-2 md:h-3 bg-slate-700 shadow-[0_-5px_20px_rgba(168,85,247,0.3)]"></div>
                  <div className="absolute inset-0 w-full h-full pb-8 md:pb-12 px-6 md:px-8">
                    {renderNodes(true)}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-flolim opacity-20 blur-xl animate-pulse"></div>
                </div>

                <div className="relative z-10 p-6 md:p-8 grow bg-slate-900/50">
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-2 md:gap-3">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-md bg-flolim/20 flex items-center justify-center shrink-0 mt-0.5 border border-flolim/40">
                        <svg
                          className="w-2.5 h-2.5 md:w-3 md:h-3 text-flolim"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <strong className="text-white text-xs md:text-sm block mb-1 break-keep">
                          조명 하나하나를 픽셀 단위로 개별 제어
                        </strong>
                        <span className="text-slate-400 text-[10px] md:text-xs break-keep">
                          수백 개의 조명을 마치 모니터 화면처럼 정밀하게
                          통제합니다.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-md bg-flolim/20 flex items-center justify-center shrink-0 mt-0.5 border border-flolim/40">
                        <svg
                          className="w-2.5 h-2.5 md:w-3 md:h-3 text-flolim"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <strong className="text-white text-xs md:text-sm block mb-1 break-keep">
                          1,600만 가지 풀컬러 및 동적 애니메이션
                        </strong>
                        <span className="text-slate-400 text-[10px] md:text-xs break-keep">
                          빛이 흐르고 파도치는 화려한 미디어 파사드를
                          연출합니다.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 2. DMX 시스템 핵심 구조 */}
          <div className="mb-20 md:mb-24 relative z-10">
            <div className="bg-[#050b14] rounded-3xl p-8 md:p-10 border border-slate-700 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-inner group overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="md:w-1/2 relative z-10">
                <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                  단 한 가닥의 선으로 지휘하는
                  <br />
                  <span className="text-flolim">빛의 오케스트라</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4 md:mb-6 font-light text-xs md:text-sm break-keep">
                  DMX512 기술의 가장 큰 장점은{" "}
                  <strong className="text-white">
                    '데이지 체인(Daisy-Chain)'
                  </strong>{" "}
                  연결 방식입니다. 중앙 메인 컨트롤러에서 시작된 단 한 가닥의
                  케이블이 수십, 수백 개의 조명을 꼬리에 꼬리를 물고 연결합니다.
                </p>
                <p className="text-slate-400 leading-relaxed font-light text-xs md:text-sm break-keep">
                  복잡하게 수백 가닥의 전선을 깔 필요가 없어{" "}
                  <strong className="text-flolim">시공이 매우 간편</strong>하며,
                  0.01초의 딜레이도 없이 음악과 영상에 맞춘{" "}
                  <strong className="text-white">
                    초고속 실시간 반응(Zero-Latency)
                  </strong>
                  을 자랑합니다.
                </p>
              </div>

              {/* 데이지 체인 구조 그래픽 */}
              <div className="md:w-1/2 w-full bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-700 relative shadow-lg z-10">
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-800 border-2 border-flolim rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(24,169,198,0.5)] z-10 relative">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-flolim"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[9px] md:text-[10px] font-bold text-white mt-2 md:mt-3 tracking-wider whitespace-nowrap">
                      메인 컨트롤러
                    </span>
                  </div>

                  <div className="flex-1 h-[2px] bg-slate-700 mx-1 md:mx-2 relative overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-flolim to-transparent animate-[translateX_2s_linear_infinite]"></div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center z-10 relative">
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899] animate-pulse"></div>
                    </div>
                    <span className="text-[8px] md:text-[9px] text-slate-500 mt-2 font-mono whitespace-nowrap">
                      채널 1
                    </span>
                  </div>

                  <div className="flex-1 h-[2px] bg-slate-700 mx-1 md:mx-2 relative overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[translateX_2s_linear_infinite]"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center z-10 relative">
                      <div
                        className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                    <span className="text-[8px] md:text-[9px] text-slate-500 mt-2 font-mono whitespace-nowrap">
                      채널 2
                    </span>
                  </div>

                  <div className="flex-1 h-[2px] bg-slate-700 mx-1 md:mx-2 relative overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-flolim to-transparent animate-[translateX_2s_linear_infinite]"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center z-10 relative">
                      <div
                        className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-flolim shadow-[0_0_10px_#18A9C6] animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                    <span className="text-[8px] md:text-[9px] text-slate-500 mt-2 font-mono whitespace-nowrap">
                      채널 3
                    </span>
                  </div>
                </div>
                <style>
                  {`
                    @keyframes translateX {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(500%); }
                    }
                  `}
                </style>
              </div>
            </div>
          </div>

          {/* 3. DMX 제어 하드웨어 (React 탭 UI 적용) */}
          <div className="relative z-10 border-t border-slate-800 pt-16 md:pt-20">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-3 break-keep">
                플로림 DMX 제어 하드웨어
              </h2>
              <p className="text-slate-400 font-light text-xs md:text-sm break-keep">
                대규모 경관 조명을 안정적으로 연출하는 플로림의 전용 하드웨어
                라인업
              </p>
            </div>

            {/* 탭 버튼 영역 */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
              {hardwareList.map((hw, idx) => (
                <button
                  key={hw.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-flolim text-slate-900 shadow-[0_0_15px_rgba(24,169,198,0.5)] scale-105"
                      : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {hw.name.split(" ")[0]}{" "}
                  {/* 💡 모바일에서 버튼 길어지지 않게 앞부분만 표시 */}
                  <span className="hidden sm:inline">
                    {" "}
                    {hw.name.split(" ").slice(1).join(" ")}
                  </span>
                </button>
              ))}
            </div>

            {/* 선택된 탭 컨텐츠 영역 */}
            <div className="bg-[#050b14] rounded-3xl border border-slate-700 shadow-inner overflow-hidden relative transition-all duration-500">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-flolim/5 rounded-full z-0 pointer-events-none blur-3xl"></div>

              <div
                className="flex flex-col md:flex-row relative z-10 animate-fade-in"
                key={activeTab}
              >
                {/* 좌측 이미지 영역 */}
                <div className="md:w-1/2 bg-slate-900/50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-700/50 min-h-[300px]">
                  <img
                    src={hardwareList[activeTab].image}
                    alt={hardwareList[activeTab].name}
                    className="max-w-full max-h-[300px] object-contain drop-shadow-2xl animate-fade-in"
                  />
                </div>

                {/* 우측 상세 스펙 영역 */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] md:text-xs font-bold rounded-lg border mb-3 ${hardwareList[activeTab].badgeColor}`}
                    >
                      {hardwareList[activeTab].badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                      {hardwareList[activeTab].name}
                    </h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed break-keep">
                      {hardwareList[activeTab].desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {hardwareList[activeTab].specs.map((spec, i) => (
                      <div
                        key={i}
                        className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                      >
                        <span className="text-flolim font-bold text-xs shrink-0 sm:w-24">
                          {spec.label}
                        </span>
                        <span className="text-slate-300 text-xs md:text-sm font-medium break-keep">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BottomNav
          prev={{
            label: "이전 페이지",
            title: "NB-IoT 제어",
            path: "/smart-city/nb-iot",
          }}
          next={{
            label: "다음 카테고리",
            title: "스마트 빌딩 개요",
            path: "/smart-building/intro",
          }}
        />
      </div>
    </div>
  );
};

export default SmartCityDmx;
