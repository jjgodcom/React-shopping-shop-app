export default function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="title">다양한 디자인이 있는 ProtoPie</div>
        <div className="subtitle">
        ProtoPie를 사용하여 다른 디자이너들이 만든 것을 확인해보세요. 이 예시들을 다운로드하여 그들이 상호작용을 어떻게 만들었는지 정확히 배울 수 있습니다.
        </div>
        <div className="btn__area">
          <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer">
            <button>ProtoPie 바로가기</button>
          </a>
        </div>
      </div>
    </header>
  );
}
