# 1 State와 Props로 할일 목록 앱 개발(JSX버전)

- 실제로는 이렇게까지 복잡하게 컴포넌트를 구성하지 않는다
- ContextAPI 실습을 위해 구조를 아래와 같이 구성

## 1.1 컴포넌트 구조

- App
  - TodoList Data
    - DataView(ui)
      - Title
      - TodoList
        - TodoItem
  - Todo Data
    - Input
      - TodoIput
        - TextIput
        - AddButton
      - InputButton

### 1.1.1 컴포넌트 분리 기준

- 구조는 프로젝트마다 달라질 수 있음

- PageComponent : 데이터의 상태관리를 할 수 있도록
- UiComponent : 화면 또는 페이지를 구성하는 UI 로직을 가지도록
- APIComponent : API로직을 분리
