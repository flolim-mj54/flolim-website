import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // 현재 접속 중인 경로(URL) 정보를 가져옵니다.
  const { pathname } = useLocation();

  useEffect(() => {
    // 경로(pathname)가 변경될 때마다 실행됩니다.
    // 화면의 스크롤을 맨 위(x: 0, y: 0)로 올려줍니다.
    window.scrollTo(0, 0);
  }, [pathname]);

  // 화면에 렌더링할 UI는 없으므로 null을 반환합니다.
  return null;
}