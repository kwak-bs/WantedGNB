import React from "react";
import "../css/SearchTabList.css";
import { MdArrowForward } from "react-icons/md";

const SearchTabList = (props) => {
  const { hoverOutHandler,isHover } = props;

  return (
    <div 
    className={isHover === true ?"overlay_list_container show" : "overlay_list_container"} 
    onMouseOver={hoverOutHandler}>
      <div
        className={isHover === true ? "overlay_content show" : "overlay_content"}
        // 가장 먼저 걸리는 이벤트 이므로 여기서 stopPropagation해줌
        onMouseOver={(e) => e.stopPropagation()}
      >
        <div className="table_container">
          <div className="table_row">
            {/* 영업 */}
            <div className="table_col">
              <a href="/">
                <h2>
                  영업
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h3>기업영업</h3>
              </a>
              <a href="/">
                <h3>외부영업</h3>
              </a>
              <a href="/">
                <h3>영업 관리자</h3>
              </a>
              <a href="/">
                <h3>기술영업</h3>
              </a>
              <a href="/">
                <h3>주요고객사 담당자</h3>
              </a>
              <a href="/">
                <h3>솔루션 컨설턴트</h3>
              </a>
              <a href="/">
                <h3>해외영업</h3>
              </a>
              <a href="/">
                <h3>
                  더보기
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h3>
              </a>
            </div>
            {/* 미디어 */}
            <div className="table_col">
              <a href="/">
                <h2>
                  미디어
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h3>콘텐츠 크리에이터</h3>
              </a>
              <a href="/">
                <h3>PD</h3>
              </a>
              <a href="/">
                <h3>영상 편집가</h3>
              </a>
              <a href="/">
                <h3>에디터</h3>
              </a>
              <a href="/">
                <h3>비디오 제작</h3>
              </a>
              <a href="/">
                <h3>작가</h3>
              </a>
              <a href="/">
                <h3>출판 기획자</h3>
              </a>
              <a href="/">
                <h3>
                  더보기
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h3>
              </a>
            </div>
            {/* 인사 */}
            <div className="table_col">
              <a href="/">
                <h2>
                  인사
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h3>인사담당</h3>
              </a>
              <a href="/">
                <h3>리크루터</h3>
              </a>
              <a href="/">
                <h3>조직문화</h3>
              </a>
              <a href="/">
                <h3>평가 보상</h3>
              </a>
              <a href="/">
                <h3>헤드헌터</h3>
              </a>
              <a href="/">
                <h3>HRD</h3>
              </a>
              <a href="/">
                <h3>HRBP</h3>
              </a>
              <a href="/">
                <h3>
                  더보기
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h3>
              </a>
            </div>
            {/* 게임제작 */}
            <div className="table_col">
              <a href="/">
                <h2>
                  게임 제작
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h3>게임 기획자</h3>
              </a>
              <a href="/">
                <h3>게임 그래픽 디자이너</h3>
              </a>
              <a href="/">
                <h3>모바일 게임 개발자</h3>
              </a>
              <a href="/">
                <h3>게임 클라이언트 개발자</h3>
              </a>
              <a href="/">
                <h3>게임 아티스트</h3>
              </a>
              <a href="/">
                <h3>유니티 개발자</h3>
              </a>
              <a href="/">
                <h3>게임 서버 개발자</h3>
              </a>
              <a href="/">
                <h3>
                  더보기
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h3>
              </a>
            </div>
            {/* 금융 */}
            <div className="table_col">
              <a href="/">
                <h2>
                  금융
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h3>회계담당</h3>
              </a>
              <a href="/">
                <h3>재무 담당자</h3>
              </a>
              <a href="/">
                <h3>IR</h3>
              </a>
              <a href="/">
                <h3>투자 증권</h3>
              </a>
              <a href="/">
                <h3>재무 분석가</h3>
              </a>
              <a href="/">
                <h3>애널리스트</h3>
              </a>
              <a href="/">
                <h3>내부통제 담당자</h3>
              </a>
              <a href="/">
                <h3>
                  더보기
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h3>
              </a>
            </div>
            {/* 엔지니어링 설계~공공복지 */}
            <div className="table_col">
              <a href="/">
                <h2>
                  엔지니어링·설계
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h2>
                  물류·무역
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h2>
                  제조·생산
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h2>
                  의료·제약·바이오
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h2>
                  교육
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h2>
                  법률·법집행기관
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h2>
                  식·음료
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h2>
                  건설·시설
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
              <a href="/">
                <h2>
                  공공·복지
                  <i className="icon_arrow">
                    <MdArrowForward />
                  </i>
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTabList;
