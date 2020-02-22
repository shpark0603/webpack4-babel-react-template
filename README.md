# 웹팩4-바벨-리액트 템플릿

## 사용법

이 리파지토리를 클론한 다음에 터미널에 아래의 명령어를 입력하여 디펜던시를 설치합니다.

```bash
npm install
```

아래의 명령어로 webpack dev server를 열거나,
프로덕션 빌드를 할 수 있습니다.

```bash
npm start       # dev server 시작 (운영체제 기본 브라우저로 열림)
npm run build   # 프로덕션 빌드 시작 (root 디렉토리에 'dist' 생성)
```

## 이 템플릿의 특징

이 템플릿에 포함되어 있는 webpack config 파일 세 개는 아래와 같습니다.

1. development시에 사용되는 `webpack.dev.js`
2. production시에 사용되는 `webpack.prod.js`
3. 이 둘에 공통적으로 사용되는 `webpack.common.js`

[webpack-merge](https://www.npmjs.com/package/webpack-merge)를 사용하여 `webpack.common.js` 파일을 나머지 두개와 merge하여 development용 config 파일과 production용 config 파일을 만듭니다.
