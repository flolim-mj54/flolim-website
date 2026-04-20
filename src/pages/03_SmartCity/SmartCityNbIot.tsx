import { useEffect, useRef, useState } from "react";
import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

declare global {
  interface Window {
    naver: any;
  }
}

const SmartCityNbIot = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const hardwares = [
    {
      id: "01",
      title: "NB-IoT NEMA 컨트롤러",
      image: "/images/nb_controller_nema.png",
      desc: "가로등 소켓에 꽂기만 하면 끝! 별도의 통신 장비 설치 없이 스마트폰처럼 기지국과 바로 연결되는 가장 쉽고 빠른 스마트 제어기입니다.",
      specs: [
        {
          label: "설치 방식",
          value: "꽂으면 바로 시작되는 간편 장착(Plug&Play)",
        },
        { label: "특장점", value: "내장 GPS로 위치를 자동 등록하고 전력 체크" },
        {
          label: "적합한 장소",
          value: "기존 가로등을 빠르게 스마트화할 때 최적",
        },
      ],
    },
    {
      id: "02",
      title: "NB-IoT Zhaga 컨트롤러",
      image: "/images/nb_controller_zhaga.png",
      desc: "조명 기구 안에 쏙 들어가는 초소형 단말기입니다. 크기는 작지만 성능은 강력하며, 밖으로 드러나지 않아 조명 디자인을 해치지 않는 차세대 모델입니다.",
      specs: [
        { label: "디자인", value: "매우 슬림하고 컴팩트한 초소형 규격" },
        { label: "기능", value: "조명의 건강 상태를 실시간으로 진단" },
        { label: "장점", value: "최신 스마트 조명 기구와 완벽한 호환성" },
      ],
    },
    {
      id: "03",
      title: "NB-IoT 무선 컨트롤러",
      image: "/images/nb_controller_wireless.png",
      desc: "전국 어디서나 100% 잘 터지는 무선 단말기입니다. 통신 기지국과 직접 연결되어 산이나 바다 등 멀리 떨어진 곳에서도 끊김 없는 관제가 가능합니다.",
      specs: [
        { label: "연결성", value: "거리 제한 없는 강력한 전국망 커버리지" },
        { label: "효율성", value: "배터리 수명을 극대화한 초저전력 구동" },
        { label: "보안", value: "국가 기간망 수준의 철저한 데이터 암호화" },
      ],
    },
    {
      id: "04",
      title: "NB-IoT 디밍 드라이버",
      image: "/images/nb_dimming_driver.png",
      desc: "전기 요금을 실시간으로 체크하고 불필요한 낭비를 막는 '똑똑한 안정기'입니다. 제어기의 명령에 따라 전등의 밝기를 조절하며 에너지를 절약합니다.",
      specs: [
        { label: "주요 기능", value: "부드럽고 정밀한 빛의 세기 조절" },
        { label: "경제성", value: "전력 요금과 유지보수 비용을 최대 50% 절감" },
        { label: "호환성", value: "모든 NB-IoT 단말기와 다이렉트 통신" },
      ],
    },
  ];

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    const initMap = () => {
      if (!mapContainerRef.current || !window.naver) return;
      const initialZoom = window.innerWidth < 768 ? 12 : 13;
      const map = new window.naver.maps.Map(mapContainerRef.current, {
        center: new window.naver.maps.LatLng(36.815, 127.115),
        zoom: initialZoom,
        zoomControl: false,
        mapDataControl: false,
        scaleControl: false,
      });
      mapInstanceRef.current = map;
      const bs1Coord = new window.naver.maps.LatLng(36.828, 127.09);
      const bs2Coord = new window.naver.maps.LatLng(36.8, 127.14);
      const isolatedNodes = [
        new window.naver.maps.LatLng(36.835, 127.08),
        new window.naver.maps.LatLng(36.83, 127.1),
        new window.naver.maps.LatLng(36.82, 127.075),
        new window.naver.maps.LatLng(36.815, 127.095),
        new window.naver.maps.LatLng(36.84, 127.09),
        new window.naver.maps.LatLng(36.825, 127.105),
        new window.naver.maps.LatLng(36.83, 127.06),
        new window.naver.maps.LatLng(36.81, 127.085),
        new window.naver.maps.LatLng(36.845, 127.07),
        new window.naver.maps.LatLng(36.795, 127.13),
        new window.naver.maps.LatLng(36.81, 127.15),
        new window.naver.maps.LatLng(36.79, 127.145),
        new window.naver.maps.LatLng(36.8, 127.125),
        new window.naver.maps.LatLng(36.815, 127.135),
        new window.naver.maps.LatLng(36.785, 127.155),
        new window.naver.maps.LatLng(36.78, 127.13),
        new window.naver.maps.LatLng(36.79, 127.16),
        new window.naver.maps.LatLng(36.815, 127.115),
        new window.naver.maps.LatLng(36.805, 127.105),
        new window.naver.maps.LatLng(36.82, 127.12),
      ];

      const createMarker = (
        position: any,
        label: string,
        isBaseStation: boolean,
        delay: number,
      ) => {
        const dotSize = isBaseStation ? 18 : 7;
        const radarEffect = isBaseStation
          ? `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 180px; height: 180px; border: 2px solid #18A9C6; border-radius: 50%; animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; opacity: 0.3;"></div><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: 300px; border: 1px solid #18A9C6; border-radius: 50%; animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: 1s; opacity: 0.15;"></div>`
          : `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; border: 2px solid #18A9C6; border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: ${delay}s; opacity: 0.7;"></div>`;
        const coreElement = isBaseStation
          ? `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 36px; height: 36px; background-color: #0f172a; border: 3px solid #18A9C6; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(24,169,198,1); z-index: 10;"><svg viewBox="0 0 24 24" fill="none" style="width: 20px; height: 20px; stroke: #18A9C6; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;"><path d="M4 8a10 10 0 0 1 16 0"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="16" x2="12" y2="22"/></svg></div>`
          : `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: ${dotSize}px; height: ${dotSize}px; background-color: #ffffff; border: 2px solid #18A9C6; border-radius: 50%; box-shadow: 0 0 15px rgba(24,169,198,1); z-index: 10;"></div>`;
        const labelHtml = isBaseStation
          ? `<div style="position: absolute; top: 30px; left: 50%; transform: translateX(-50%); background-color: rgba(15,23,42,0.9); color: #18A9C6; font-size: 11px; font-weight: bold; padding: 4px 8px; border-radius: 6px; border: 1px solid #18A9C6; white-space: nowrap; z-index: 11; box-shadow: 0 4px 6px rgba(0,0,0,0.5);">${label}</div>`
          : "";
        const contentString = `<div style="filter: invert(100%) hue-rotate(180deg); width: 20px; height: 20px; position: relative; pointer-events: none;">${radarEffect}${coreElement}${labelHtml}</div>`;

        new window.naver.maps.Marker({
          position: position,
          map: map,
          icon: {
            content: contentString,
            size: new window.naver.maps.Size(20, 20),
            anchor: new window.naver.maps.Point(10, 10),
          },
        });
      };

      createMarker(bs1Coord, "통신사 기지국 A", true, 0);
      createMarker(bs2Coord, "통신사 기지국 B", true, 0.5);
      isolatedNodes.forEach((coord, idx) =>
        createMarker(coord, "", false, idx * 0.1),
      );

      const drawDirectLine = (p1: any, p2: any) => {
        new window.naver.maps.Polyline({
          map: map,
          path: [p1, p2],
          strokeColor: "#18A9C6",
          strokeWeight: 4,
          strokeOpacity: 0.15,
          strokeLineCap: "round",
          strokeLineJoin: "round",
        });
        new window.naver.maps.Polyline({
          map: map,
          path: [p1, p2],
          strokeColor: "#18A9C6",
          strokeWeight: 1.5,
          strokeStyle: "longdash",
          strokeOpacity: 0.7,
          strokeLineCap: "round",
          strokeLineJoin: "round",
        });
      };
      const getDistance = (p1: any, p2: any) =>
        Math.pow(p1.lat() - p2.lat(), 2) + Math.pow(p1.lng() - p2.lng(), 2);
      isolatedNodes.forEach((coord) => {
        const dist1 = getDistance(coord, bs1Coord);
        const dist2 = getDistance(coord, bs2Coord);
        if (dist1 < dist2) drawDirectLine(bs1Coord, coord);
        else drawDirectLine(bs2Coord, coord);
      });
      setIsMapLoaded(true);
    };

    if (window.naver && window.naver.maps) initMap();
    else if (clientId) {
      const script = document.createElement("script");
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
      script.async = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    }
  }, []);

  const handleZoomIn = () => {
    if (mapInstanceRef.current)
      mapInstanceRef.current.setZoom(
        mapInstanceRef.current.getZoom() + 1,
        true,
      );
  };
  const handleZoomOut = () => {
    if (mapInstanceRef.current)
      mapInstanceRef.current.setZoom(
        mapInstanceRef.current.getZoom() - 1,
        true,
      );
  };

  const benefits = [
    {
      id: 1,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      ),
      title: "초기 구축비용 최소화",
      desc: "비싼 무선 중계기를 따로 설치할 필요가 없습니다. 단말기만 달면 기지국과 바로 연결됩니다.",
    },
    {
      id: 2,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
      title: "전국 어디서나 연결",
      desc: "휴대폰이 터지는 곳이라면 산간 오지나 바닷가에서도 100% 완벽한 제어가 가능합니다.",
    },
    {
      id: 3,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      title: "최고 수준의 보안성",
      desc: "국가 기간망급 보안 기술이 적용되어 외부 해킹이나 데이터 위변조로부터 가장 안전합니다.",
    },
  ];

  return (
    <div className="pb-10 relative overflow-hidden">
      <PageHeader
        category="Network Solution"
        title="NB-IoT 가로등 제어 솔루션"
        subtitle={
          <>
            중계기 설치 없이, 거리 제한 없이!{" "}
            <strong className="text-flolim font-bold">
              전국 어디서나 터지는
            </strong>{" "}
            상용망 직결 시스템
          </>
        }
      />
      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-flolim/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-20 md:mb-24 relative z-10">
            <div className="lg:w-5/12">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                통신사 기지국과 직접 연결되는
                <br />
                <span className="text-flolim">다이렉트 광역 통신망</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 font-light text-xs md:text-base break-keep">
                플로림의 NB-IoT 솔루션은 스마트폰처럼 조명이 직접 통신사
                기지국과 대화합니다. 별도의 무선 중계기를 세우지 않아도 되므로
                비용이 절약되고 관리가 매우 편리합니다.
              </p>
              <div className="bg-[#050b14] border-l-4 border-flolim p-4 md:p-5 rounded-r-xl shadow-inner">
                <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed break-keep">
                  서로 멀리 떨어져 있는{" "}
                  <strong className="text-flolim">
                    외곽 지역 가로등이나 단독 보안등
                  </strong>
                  에 가장 적합한 고성능 통신 방식입니다.
                </p>
              </div>
            </div>
            <div className="lg:w-7/12 w-full flex justify-center">
              <div className="relative w-full h-[300px] md:h-[450px] bg-[#050b14] rounded-2xl md:rounded-3xl shadow-inner overflow-hidden border border-slate-700 flex items-center justify-center p-1.5 md:p-2">
                <div
                  ref={mapContainerRef}
                  className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden"
                  style={{
                    filter:
                      "invert(100%) hue-rotate(180deg) brightness(85%) contrast(110%) grayscale(20%)",
                  }}
                ></div>
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-slate-700 z-20 pointer-events-none shadow-lg">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-flolim rounded-full animate-pulse shadow-[0_0_10px_rgba(24,169,198,1)]"></span>
                  <span className="text-[9px] md:text-[10px] font-bold text-white tracking-widest uppercase">
                    실시간 상용망 관제
                  </span>
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-2 z-20">
                  <button
                    onClick={handleZoomIn}
                    className="w-8 h-8 md:w-10 md:h-10 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white rounded-lg md:rounded-xl shadow-lg flex items-center justify-center hover:text-flolim hover:border-flolim transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="w-8 h-8 md:w-10 md:h-10 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white rounded-lg md:rounded-xl shadow-lg flex items-center justify-center hover:text-flolim hover:border-flolim transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M20 12H4"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 md:mb-24 relative z-10 border-t border-slate-800 pt-16">
            <div className="text-center mb-8 md:mb-12">
              {/* 💡 요청하신 대로 타이틀 수정 완료 */}
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4 break-keep">
                NB-IoT 핵심 하드웨어 구성
              </h2>
              <p className="text-slate-400 font-light text-xs md:text-sm break-keep">
                현장의 조명 기구 형태와 통신 환경에 맞춘 최적의 단말기 라인업을
                제공합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {hardwares.map((hw) => (
                <div
                  key={hw.id}
                  className="bg-[#050b14] p-5 md:p-6 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden cursor-default flex flex-col"
                >
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-full h-40 bg-slate-800/50 rounded-2xl mb-5 flex items-center justify-center p-3 border border-slate-600/50 group-hover:border-flolim/40 transition-colors overflow-hidden">
                      <img
                        src={hw.image}
                        alt={hw.title}
                        className="max-w-full max-h-full object-contain mix-blend-screen drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-slate-800 border border-slate-600 text-flolim rounded-lg flex items-center justify-center font-black shadow-sm shrink-0">
                        {hw.id}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-white group-hover:text-flolim transition-colors break-keep">
                        {hw.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 font-light leading-relaxed text-[11px] md:text-xs break-keep flex-grow mb-4">
                      {hw.desc}
                    </p>
                    <div className="mt-auto space-y-2">
                      {hw.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex flex-col gap-1"
                        >
                          <span className="text-flolim font-bold text-[9px] uppercase tracking-wider">
                            {spec.label}
                          </span>
                          <span className="text-slate-300 text-[11px] md:text-xs font-medium leading-snug break-keep">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 relative z-10 border-t border-slate-800 pt-16">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center break-keep">
              왜 플로림 NB-IoT 솔루션인가요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {benefits.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#050b14] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-colors group relative overflow-hidden cursor-default"
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-xl flex items-center justify-center text-flolim mb-4 md:mb-5 border border-slate-600">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {b.icon}
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm md:text-base text-white mb-2 break-keep">
                      {b.title}
                    </h3>
                    <p className="text-slate-400 text-[11px] md:text-xs font-light leading-relaxed break-keep">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <BottomNav
          prev={{
            label: "이전 페이지",
            title: "LoRa-Mesh 제어",
            path: "/smart-city/lora",
          }}
          next={{
            label: "다음 페이지",
            title: "DMX 경관조명",
            path: "/smart-city/dmx",
          }}
        />
      </div>
    </div>
  );
};

export default SmartCityNbIot;
