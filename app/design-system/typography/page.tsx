import {
    Display,
    Headline1,
    Headline2,
    Subtitle1,
    Subtitle2,
    BodyLarge,
    Body,
    BodySmall,
    Caption,
    Overline,
    Label,
} from "../components/typography";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-8">
      <Display>Display - 메인 타이틀</Display>
      <Headline1>Headline1 - 페이지 타이틀</Headline1>
      <Headline2>Headline2 - 섹션 타이틀</Headline2>
      <Subtitle1>Subtitle1 - 부제목</Subtitle1>
      <Subtitle2>Subtitle2 - 작은 부제목</Subtitle2>
      <BodyLarge>BodyLarge - 주요 본문 텍스트</BodyLarge>
      <Body>Body - 일반 본문 텍스트</Body>
      <BodySmall>BodySmall - 작은 본문 텍스트</BodySmall>
      <Caption>Caption - 캡션/부가 설명</Caption>
      <Overline>Overline - OVERLINE LABEL</Overline>
      <div>
        <Label>Label - 폼 라벨</Label>
        <input className="block border rounded px-2 py-1 mt-1" placeholder="입력하세요" />
      </div>
    </div>
  );
}
