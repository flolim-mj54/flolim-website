import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import BottomNav from "../../components/BottomNav";

const PlatformDashboard = () => {
  // --- [💡 핵심: 이미지 크기가 바뀌어도 데이터 위치를 유지하는 반응형 오버레이 설계] ---

  // 이미지 대비 각 데이터/버튼의 정밀 위치 설정 (퍼센트 단위: %, top/left 기준)
  // 대표님께서 나중에 위치를 미세 조정하고 싶으시면 이 값들을 바꾸시면 됩니다.
  const dataloaction = {
    // 1. 디지털 트윈 (상단 뷰)
    digitalTwin: {
      light1: { top: 22.5, left: 36.8, text: "사무실 전등1 98%" },
      light2: { top: 20.8, left: 51.5, text: "사무실 전등2 70%" },
      light3: { top: 19.8, left: 60.5, text: "사무실 전등3 100%" },
      btnReset: { top: 35.5, left: 18.5, width: 8, height: 4 }, // 초기 상태 버튼
      btnSync: { top: 35.5, left: 50, width: 10, height: 4 }, // 실시간 동기화 버튼
    },
    // 2. ESG 리포트 (중단 카드)
    esg: {
      totalPower: { top: 46.1, left: 19.8 }, // 6.39 kWh
      co2: { top: 46.1, left: 47.0 }, // 4.087 kg
      cost: { top: 46.1, left: 74.0 }, // 1,311 원
      gauge: { top: 56.5, left: 27.5 }, // 게이지 138.9W
      // 게이지를 누르면 전력이 바뀌는 상호작용 영역
      gaugeArea: { top: 49, left: 14, width: 27, height: 23 },
    },
    // 3. 컨트롤 패널 (하단 카드)
    control: {
      light1Toggle: { top: 71.3, left: 14.7, width: 10, height: 4 }, // 조명 카드 1 토글
      light2Toggle: { top: 71.3, left: 28.5, width: 10, height: 4 }, // 조명 카드 2 토글
      visionSensor: { top: 74.0, left: 56.8 }, // 센서 카드 11.479W
      sensorLux: { top: 74.0, left: 71.2 }, // 조도 센서 911 Lux
      otherSwitch: { top: 92.5, left: 16.5, width: 8, height: 8 }, // 기타 기기 스위치
    },
  };

  // --- [💻 대시보드 상호작용 상태 관리] ---
  const [totalPower, setTotalPower] = useState<string>("6.39"); // 6.39 kWh
  const [activeLight, setActiveLight] = useState<
    "light1" | "light2" | "light3" | null
  >("light3"); // 현재 활성 전등
  const [otherDeviceStatus, setOtherDeviceStatus] = useState<"ON" | "OFF">(
    "OFF",
  ); // 기타 기기 상태

  // 상호작용 함수: ESG 게이지 영역 클릭 시 소비 전력 데이터 변경 애니메이션
  const handleGaugeClick = () => {
    setTotalPower("6.15"); // 데이터 변경
    setTimeout(() => setTotalPower("6.39"), 2000); // 2초 뒤 원복 (애니메이션 효과)
    // 실제로는 API 호출이 일어납니다.
  };

  return (
    <div className="pb-10 relative overflow-hidden bg-[#020617] min-h-screen text-slate-200">
      <PageHeader
        category="Unified Control Platform"
        title="통합 관제 대시보드"
        subtitle={
          <>
            건물의 모든 조명, 센서, 전력 사용량을 한눈에 확인하고 제어하는
            <br />
            <strong className="text-white font-bold">
              플로림 빌딩 최상위 통합 관제 센터
            </strong>
            입니다.
          </>
        }
      />

      <div className="container mx-auto px-4 max-w-7xl mt-10 relative">
        {/* --- [💡 핵심: 통합 대시보드 이미지 한 장만 배치] --- */}
        <div className="relative w-full rounded-3xl border-2 border-slate-800 shadow-2xl overflow-hidden group">
          <img
            src="/images/dashboard.png" // 대표님께서 요청하신 통합 이미지
            alt="플로림 통합 관제 대시보드"
            className="w-full h-auto object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-[1.01]"
          />

          {/* --- [💡 핵심: 이미지 크기에 맞춰 유동적으로 변하는 데이터/버튼 오버레이] --- */}
          {/* 전체를 relative 컨테이너로 묶고, 내부 데이터는 absolute % 좌표로 배치 */}
          <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
            {/* [1] 디지털 트윈 오버레이 텍스트 */}
            {[
              { loc: dataloaction.digitalTwin.light1, id: "light1" },
              { loc: dataloaction.digitalTwin.light2, id: "light2" },
              { loc: dataloaction.digitalTwin.light3, id: "light3" },
            ].map(({ loc, id }) => (
              <div
                key={id}
                className={`absolute px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 text-[10px] md:text-xs font-bold text-slate-300 transition-all duration-500 ${activeLight === id ? "opacity-100" : "opacity-60"}`}
                style={{
                  top: `${loc.top}%`,
                  left: `${loc.left}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {loc.text}
              </div>
            ))}

            {/* [2] ESG 리포트 오버레이 데이터 */}
            {[
              {
                loc: dataloaction.esg.totalPower,
                text: totalPower,
                unit: "kWh",
              },
              { loc: dataloaction.esg.co2, text: "4.087", unit: "kg" },
              { loc: dataloaction.esg.cost, text: "1,311", unit: "원" },
            ].map((data, i) => (
              <div
                key={i}
                className="absolute text-center"
                style={{
                  top: `${data.loc.top}%`,
                  left: `${data.loc.left}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="text-3xl md:text-4xl font-black text-flolim tracking-tight">
                  {data.text}
                </span>
                <span className="text-sm md:text-base font-bold text-slate-500 ml-1.5">
                  {data.unit}
                </span>
              </div>
            ))}
            {/* 게이지 텍스트 오버레이 */}
            <div
              className="absolute text-center"
              style={{
                top: `${dataloaction.esg.gauge.top}%`,
                left: `${dataloaction.esg.gauge.left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="text-3xl md:text-4xl font-black text-slate-100 tracking-tight">
                138.9
              </span>
              <span className="text-sm md:text-base font-bold text-slate-500 ml-1.5">
                W
              </span>
            </div>

            {/* [3] 컨트롤 패널 오버레이 센서 데이터 */}
            <div
              className="absolute"
              style={{
                top: `${dataloaction.control.visionSensor.top}%`,
                left: `${dataloaction.control.visionSensor.left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
                11.479
              </span>
              <span className="text-sm md:text-base font-bold text-slate-500 ml-1.5">
                W
              </span>
            </div>
            <div
              className="absolute text-center"
              style={{
                top: `${dataloaction.control.sensorLux.top}%`,
                left: `${dataloaction.control.sensorLux.left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="text-xl md:text-2xl font-black text-flolim tracking-tight">
                911
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-500 ml-1">
                Lux
              </span>
            </div>

            {/* 기타 기기 스위치 상태 텍스트 */}
            <div
              className="absolute text-center"
              style={{
                top: `${dataloaction.control.otherSwitch.top + 2}%`,
                left: `${dataloaction.control.otherSwitch.left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span
                className={`text-base md:text-lg font-bold ${otherDeviceStatus === "ON" ? "text-cyan-400 animate-pulse" : "text-slate-600"}`}
              >
                {otherDeviceStatus}
              </span>
            </div>
          </div>

          {/* --- [💡 핵심: 이미지 위에 덮어씌운 투명 클릭 영역 (Hotspots)] --- */}
          {/* pointer-events: auto를 사용하여 실제 클릭 상호작용 구현 */}
          <div className="absolute inset-0 z-20 w-full h-full">
            {/* 게이지 영역 클릭 (상호작용 테스트) */}
            <div
              className="absolute cursor-pointer rounded-full hover:bg-slate-700/20 active:scale-95 transition-all"
              style={{
                top: `${dataloaction.esg.gaugeArea.top}%`,
                left: `${dataloaction.esg.gaugeArea.left}%`,
                width: `${dataloaction.esg.gaugeArea.width}%`,
                height: `${dataloaction.esg.gaugeArea.height}%`,
              }}
              onClick={handleGaugeClick} // 클릭 시 전력 데이터 변경
              title="클릭 시 소비 전력 상호작용 테스트"
            ></div>

            {/* 조명 카드 1/2 토글 영역 */}
            <div
              className="absolute cursor-pointer rounded-xl hover:bg-slate-700/30 active:scale-95 transition-all"
              style={{
                top: `${dataloaction.control.light1Toggle.top}%`,
                left: `${dataloaction.control.light1Toggle.left}%`,
                width: `${dataloaction.control.light1Toggle.width}%`,
                height: `${dataloaction.control.light1Toggle.height}%`,
              }}
              onClick={() => setActiveLight("light1")} // 전등 활성화 변경
              title="조명 구역 1 활성화"
            ></div>
            <div
              className="absolute cursor-pointer rounded-xl hover:bg-slate-700/30 active:scale-95 transition-all"
              style={{
                top: `${dataloaction.control.light2Toggle.top}%`,
                left: `${dataloaction.control.light2Toggle.left}%`,
                width: `${dataloaction.control.light2Toggle.width}%`,
                height: `${dataloaction.control.light2Toggle.height}%`,
              }}
              onClick={() => setActiveLight("light2")} // 전등 활성화 변경
              title="조명 구역 2 활성화"
            ></div>

            {/* 기타 기기 스위치 클릭 영역 */}
            <div
              className="absolute cursor-pointer rounded-full hover:bg-slate-700/20 active:scale-95 transition-all"
              style={{
                top: `${dataloaction.control.otherSwitch.top}%`,
                left: `${dataloaction.control.otherSwitch.left}%`,
                width: `${dataloaction.control.otherSwitch.width}%`,
                height: `${dataloaction.control.otherSwitch.height}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() =>
                setOtherDeviceStatus((prev) => (prev === "ON" ? "OFF" : "ON"))
              } // 스위치 토글
              title="기타 기기 ON/OFF 스위치"
            ></div>

            {/* 디지털 트윈 하단 버튼 영역 (상호작용) */}
            <div
              className="absolute cursor-pointer rounded-lg hover:bg-slate-700/30 active:scale-95 transition-all"
              style={{
                top: `${dataloaction.digitalTwin.btnReset.top}%`,
                left: `${dataloaction.digitalTwin.btnReset.left}%`,
                width: `${dataloaction.digitalTwin.btnReset.width}%`,
                height: `${dataloaction.digitalTwin.btnReset.height}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => console.log("초기 상태 버튼 클릭")} // 나중에 실제 기능 연결
              title="대시보드 초기 상태로 리셋"
            ></div>
            <div
              className="absolute cursor-pointer rounded-lg hover:bg-slate-700/30 active:scale-95 transition-all"
              style={{
                top: `${dataloaction.digitalTwin.btnSync.top}%`,
                left: `${dataloaction.digitalTwin.btnSync.left}%`,
                width: `${dataloaction.digitalTwin.btnSync.width}%`,
                height: `${dataloaction.digitalTwin.btnSync.height}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => console.log("실시간 동기화 버튼 클릭")} // 나중에 실제 기능 연결
              title="실시간 제어 동기화 시도"
            ></div>
          </div>
        </div>

        <BottomNav
          prev={{
            label: "이전 카테고리",
            title: "DMX 경관조명 및 제품소개",
            path: "/smart-city/dmx",
          }}
          next={{
            label: "다음 페이지",
            title: "ESG 경영 리포트",
            path: "/platform/esg",
          }}
        />
      </div>
    </div>
  );
};

export default PlatformDashboard;
