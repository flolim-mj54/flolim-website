import { useEffect, useRef, useState } from "react";
import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

declare global {
  interface Window {
    naver: any;
  }
}

const SmartCityLora = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // 💡 상단 2개 (가로등, 드라이버)
  const topHardwares = [
    {
      id: "01",
      title: "스마트 LED 가로등 본체",
      image: "/images/city_smart_streetlight.jpg",
      desc: "다양한 스마트 제어 모듈과 완벽하게 결합되어 에너지 절감을 극대화하는 고효율·고내구성 LED 가로등 본체입니다.",
      specs: [
        { label: "광효율", value: "고효율 LED 광원 적용으로 전력 최소화" },
        { label: "내구성", value: "IP66 등급 완벽한 방수·방진 설계" },
        { label: "호환성", value: "NEMA/Zhaga 표준 규격 소켓 지원" },
      ],
    },
    {
      id: "02",
      title: "LoRa-Mesh 전용 드라이버",
      image: "/images/lora_dimming_driver.png",
      desc: "제어기의 신호를 받아 실제 빛의 밝기를 부드럽게 바꿔주는 '에너지 절약 장치'입니다. 전력 낭비를 줄여 전등 수명을 비약적으로 늘려줍니다.",
      specs: [
        { label: "기능", value: "0~100%까지 세밀한 밝기 조절(디밍)" },
        { label: "내구성", value: "강한 노이즈와 외부 충격 방지 설계" },
        { label: "효과", value: "전력 사용량 감소 및 전등 수명 연장" },
      ],
    },
  ];

  // 💡 하단 3개 (게이트웨이, 컨트롤러 2개)
  const bottomHardwares = [
    {
      id: "03",
      title: "LoRa-Mesh 통합 게이트웨이",
      image: "/images/lora_controller.png",
      desc: "수천 개의 가로등 데이터를 하나로 모아 관리자에게 전달하는 '총괄 지휘관'입니다. 대규모 단지의 조명을 한곳에서 관리할 때 필수적인 메인 장치입니다.",
      specs: [
        { label: "역할", value: "현장 데이터 수집 및 관리 서버 전송" },
        { label: "연결", value: "수만 개의 컨트롤러와 무선 연결 가능" },
        { label: "장점", value: "넓은 지역의 에너지를 한눈에 통합 분석" },
      ],
    },
    {
      id: "04",
      title: "무선 스마트 조명 컨트롤러",
      image: "/images/lora_controller_wireless.png",
      desc: "가로등에 장착되어 빛을 조절하는 '똑똑한 눈'입니다. 주변 밝기를 감지해 스스로 불을 조절하며, 통신이 끊겨도 주변 가로등을 통해 연결을 이어갑니다.",
      specs: [
        { label: "핵심 기술", value: "스스로 통신 경로를 찾는 자가 복구망" },
        { label: "자동화", value: "주변 환경에 맞춘 자동 밝기 조절" },
        { label: "안정성", value: "장애물이나 지형에 상관없는 무중단 통신" },
      ],
    },
    {
      id: "05",
      title: "단일램프 무선 컨트롤러",
      image: "/images/lora_controller_1lamp.png",
      desc: "가로등 전구 하나하나를 정밀하게 관리하는 '스마트 스위치'입니다. 멀리 떨어진 개별 전등의 고장 여부를 실시간으로 확인하고 원격으로 제어합니다.",
      specs: [
        { label: "특화 기능", value: "개별 전등 단위의 정밀한 온/오프 제어" },
        { label: "진단", value: "전구 고장 및 전압 이상 즉시 감지" },
        { label: "설치", value: "기존 가로등 기구에 간편하게 추가 가능" },
      ],
    },
  ];

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

    const initMap = () => {
      if (!mapContainerRef.current || !window.naver) return;

      const map = new window.naver.maps.Map(mapContainerRef.current, {
        center: new window.naver.maps.LatLng(36.8495, 127.124),
        zoom: 16,
        zoomControl: false,
        mapDataControl: false,
        scaleControl: false,
      });
      mapInstanceRef.current = map;

      const gwCoord = new window.naver.maps.LatLng(36.848788, 127.122366);
      const topW3 = new window.naver.maps.LatLng(36.852203, 127.126393);
      const topE3 = new window.naver.maps.LatLng(36.851857, 127.126666);
      const topW2 = new window.naver.maps.LatLng(36.851608, 127.125665);
      const topE2 = new window.naver.maps.LatLng(36.851402, 127.126135);
      const topW1 = new window.naver.maps.LatLng(36.85105, 127.125073);
      const topE1 = new window.naver.maps.LatLng(36.850843, 127.125506);
      const baseW1 = new window.naver.maps.LatLng(36.849722, 127.124088);
      const baseW2 = new window.naver.maps.LatLng(36.849161, 127.123763);
      const baseW3 = new window.naver.maps.LatLng(36.848604, 127.123457);
      const baseE1 = new window.naver.maps.LatLng(36.849625, 127.124516);
      const baseE2 = new window.naver.maps.LatLng(36.849074, 127.124197);
      const baseE3 = new window.naver.maps.LatLng(36.848497, 127.123891);
      const midW1 = new window.naver.maps.LatLng(
        (topW1.lat() + baseW1.lat()) / 2,
        (topW1.lng() + baseW1.lng()) / 2,
      );
      const midE1 = new window.naver.maps.LatLng(
        (topE1.lat() + baseE1.lat()) / 2,
        (topE1.lng() + baseE1.lng()) / 2,
      );

      const westNodes: any[] = [
        topW3,
        topW2,
        topW1,
        midW1,
        baseW1,
        baseW2,
        baseW3,
      ];
      const eastNodes: any[] = [
        topE3,
        topE2,
        topE1,
        midE1,
        baseE1,
        baseE2,
        baseE3,
      ];

      const latStep = 0.00056;
      const lngStep = 0.000315;
      for (let i = 1; i <= 4; i++) {
        westNodes.push(
          new window.naver.maps.LatLng(
            36.848604 - latStep * i,
            127.123457 - lngStep * i,
          ),
        );
        eastNodes.push(
          new window.naver.maps.LatLng(
            36.848497 - latStep * i,
            127.123891 - lngStep * i,
          ),
        );
      }

      const createMarker = (
        position: any,
        label: string,
        isGateway: boolean,
        delay: number,
      ) => {
        const dotSize = isGateway ? 14 : 7;
        const pingSize = isGateway ? 45 : 20;
        const labelHtml = isGateway
          ? `<div style="position: absolute; top: 24px; left: 50%; transform: translateX(-50%); background-color: rgba(15,23,42,0.85); color: #18A9C6; font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 4px; border: 1px solid #18A9C6; white-space: nowrap; z-index: 11;">${label}</div>`
          : "";
        const contentString = `<div style="filter: invert(100%) hue-rotate(180deg); width: 20px; height: 20px; position: relative; pointer-events: none;"><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: ${pingSize}px; height: ${pingSize}px; border: 2px solid #18A9C6; border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; animation-delay: ${delay}s; opacity: 0.7;"></div><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: ${dotSize}px; height: ${dotSize}px; background-color: #ffffff; border: ${isGateway ? "3px solid #18A9C6" : "2px solid #18A9C6"}; border-radius: 50%; box-shadow: 0 0 15px rgba(24,169,198,1); z-index: 10;"></div>${labelHtml}</div>`;

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

      createMarker(gwCoord, "메인 게이트웨이", true, 0);
      westNodes.forEach((coord, idx) =>
        createMarker(coord, "", false, idx * 0.1),
      );
      eastNodes.forEach((coord, idx) =>
        createMarker(coord, "", false, idx * 0.1 + 0.05),
      );

      const drawLine = (
        p1: any,
        p2: any,
        type: "gateway" | "mesh-main" | "mesh-cross",
      ) => {
        let weight = 1.5;
        let opacity = 0.5;
        if (type === "gateway") {
          weight = 1;
          opacity = 0.25;
        } else if (type === "mesh-main") {
          weight = 2;
          opacity = 0.8;
        }

        new window.naver.maps.Polyline({
          map: map,
          path: [p1, p2],
          strokeColor: "#18A9C6",
          strokeWeight: weight * 2,
          strokeOpacity: opacity * 0.3,
          strokeLineCap: "round",
          strokeLineJoin: "round",
        });
        new window.naver.maps.Polyline({
          map: map,
          path: [p1, p2],
          strokeColor: "#18A9C6",
          strokeWeight: weight,
          strokeStyle: "shortdash",
          strokeOpacity: opacity,
          strokeLineCap: "round",
          strokeLineJoin: "round",
        });
      };

      westNodes.forEach((coord) => drawLine(gwCoord, coord, "gateway"));
      eastNodes.forEach((coord) => drawLine(gwCoord, coord, "gateway"));
      for (let i = 0; i < westNodes.length; i++) {
        drawLine(westNodes[i], eastNodes[i], "mesh-cross");
        if (i < westNodes.length - 1) {
          drawLine(westNodes[i], westNodes[i + 1], "mesh-main");
          drawLine(eastNodes[i], eastNodes[i + 1], "mesh-main");
          drawLine(westNodes[i], eastNodes[i + 1], "mesh-cross");
          drawLine(eastNodes[i], westNodes[i + 1], "mesh-cross");
        }
      }
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "통신비 평생 무료",
      desc: "자체 무선망을 사용하므로 수만 대를 연결해도 매달 내야 하는 통신 요금이 0원입니다.",
    },
    {
      id: 2,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      title: "실시간 고장 알림",
      desc: "전등이 꺼지거나 고장 나면 관리자에게 즉시 알려주어 즉각적인 보수가 가능합니다.",
    },
    {
      id: 3,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      ),
      title: "간편한 무선 설치",
      desc: "땅을 파고 전선을 묻는 복잡한 공사 없이 기존 가로등에 장착만 하면 바로 연결됩니다.",
    },
    {
      id: 4,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      title: "관리용 전용 화면",
      desc: "복잡한 프로그램 대신 스마트폰이나 PC에서 누구나 쉽게 다룰 수 있는 화면을 제공합니다.",
    },
  ];

  return (
    <div className="pb-10">
      <PageHeader
        category="Network Solution"
        title="LoRa-Mesh 기반 제어 솔루션"
        subtitle={
          <>
            매월 발생하는{" "}
            <strong className="text-flolim font-bold">통신비 부담 없이</strong>,
            수많은 조명을 촘촘하게 잇는 고신뢰성 자가망 시스템
          </>
        }
      />
      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <section className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-flolim/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-20 md:mb-24 relative z-10">
            <div className="lg:w-5/12">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
                음영 지역 없이 완벽하게 연결되는
                <br />
                <span className="text-flolim">대규모 그물망(Mesh) 통신</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 font-light text-xs md:text-base break-keep">
                플로림의 LoRa-Mesh 기술은 조명끼리 서로 데이터를 주고받는
                '그물망' 구조입니다. 장애물이 있거나 거리가 멀어도 조명을 거쳐
                신호를 전달하므로 도시 어디든 끊김 없이 연결됩니다.
              </p>
              <div className="bg-[#050b14] border-l-4 border-flolim p-4 md:p-5 rounded-r-xl shadow-inner">
                <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed break-keep">
                  일부 기기가 고장 나도{" "}
                  <strong className="text-flolim">
                    주변 기기를 통해 우회 경로를 알아서 찾아내므로
                  </strong>
                  , 통신 사각지대가 생기지 않습니다.
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
                    실시간 무선망 관제
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
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 break-keep">
                LoRa-Mesh 핵심 하드웨어 구성
              </h2>
            </div>

            {/* 💡 상단 2개 행 (가로등, 드라이버) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {topHardwares.map((hw) => (
                <div
                  key={hw.id}
                  className="bg-[#050b14] p-5 md:p-6 rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden cursor-default flex flex-col"
                >
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-full h-48 md:h-56 bg-slate-800/50 rounded-2xl mb-5 flex items-center justify-center p-3 border border-slate-600/50 group-hover:border-flolim/40 transition-colors overflow-hidden">
                      <img
                        src={hw.image}
                        alt={hw.title}
                        className="max-w-full max-h-full object-contain mix-blend-screen drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-slate-800 border border-slate-600 text-flolim rounded-lg flex items-center justify-center font-black shadow-sm shrink-0">
                        {hw.id}
                      </div>
                      <h3 className="text-sm md:text-lg font-bold text-white group-hover:text-flolim transition-colors break-keep">
                        {hw.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 font-light leading-relaxed text-[11px] md:text-sm break-keep flex-grow mb-6">
                      {hw.desc}
                    </p>
                    <div className="mt-auto grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {hw.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="bg-slate-900/60 p-2.5 md:p-3 rounded-xl border border-slate-800 flex flex-col gap-1 text-center justify-center"
                        >
                          <span className="text-flolim font-bold text-[9px] md:text-[10px] uppercase tracking-wider">
                            {spec.label}
                          </span>
                          <span className="text-slate-300 text-[10px] md:text-xs font-medium leading-snug break-keep">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 💡 하단 3개 행 (게이트웨이, 컨트롤러 2개) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {bottomHardwares.map((hw) => (
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
              왜 플로림 LoRa-Mesh 솔루션인가요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#050b14] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700 shadow-inner hover:border-flolim/50 active:scale-[0.98] transition-colors group relative overflow-hidden cursor-default flex flex-col"
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-flolim/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className="relative z-10 flex-1">
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
            title: "스마트 시티 개요",
            path: "/smart-city/intro",
          }}
          next={{
            label: "다음 페이지",
            title: "NB-IoT 제어 및 제품소개",
            path: "/smart-city/nb-iot",
          }}
        />
      </div>
    </div>
  );
};

export default SmartCityLora;
