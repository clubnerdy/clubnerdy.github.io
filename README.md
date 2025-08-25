# 모바일 청첩장

지인을 위한 **모바일 청첩장** 프로젝트입니다.  
React + Spring Boot 기반으로 제작되었으며, **축하메시지(방명록) 기능**을 포함하고 있습니다.  
백엔드와 프론트를 완전히 분리하여 구성했습니다.

---

## 📂 프로젝트 구조
```
wedding-letter/
 ├─ backend/
 │   ├─ src/
 │   ├─ pom.xml
 │   └─ ...
 ├─ frontend/
 │   ├─ src/
 │   ├─ package.json
 │   └─ ...
 └─ README.md
```

---

## ⚙️ 기술 스택

### Frontend
- React 18 (Vite + TypeScript)
- Axios (REST API 통신)
- React Hooks (useState, useEffect)
- CSS (간단 스타일링)

### Backend
- Spring Boot 3.x
- Spring Web, Spring Data JPA
- H2 Database (개발용) → MySQL (운영 시 교체 가능)
- Validation (javax/jakarta)
- Lombok

---

## 🚀 실행 방법

### 1. 백엔드 실행
```bash
cd backend
./mvnw spring-boot:run
```
- API 기본 주소: `http://localhost:8080/api/messages`

### 2. 프론트 실행
```bash
cd frontend
npm install   # 처음 1회만
npm run dev
```
- 개발 서버: `http://localhost:5173`

### 3. 배포
- **Frontend**: GitHub Pages  
- **Backend**: Render / Railway / Fly.io 등 Spring Boot 호스팅 서비스  
- `.env.production`에서 API Base URL 교체 후 `npm run build`

---

## 📌 주요 기능

### 모바일 청첩장
- 갤러리, 오시는 길, 계좌 안내(예정)
- 반응형 UI (모바일 최적화)

### 방명록(축하 메시지)
- **메시지 작성 (Create)**
- **목록 조회 (Read)**
- **메시지 수정 (Update)**
- **메시지 삭제 (Delete)**
- 실시간 반영 (등록/삭제 후 자동 새로고침)

---

## 🛠️ API 명세 (간단)

| Method | Endpoint            | 설명             | Request Body 예시 |
|--------|---------------------|------------------|------------------|
| GET    | `/api/messages`     | 메시지 전체 조회 | - |
| POST   | `/api/messages`     | 메시지 작성      | `{ "nickname": "홍길동", "content": "축하해요!" }` |
| PATCH  | `/api/messages/{id}`| 메시지 수정      | `{ "content": "내용 수정!" }` |
| DELETE | `/api/messages/{id}`| 메시지 삭제      | - |

---

## 🖼️ 화면 예시 (추가 예정)

- 청첩장 메인 페이지
- 방명록 작성/목록 페이지 스크린샷

---

## 👩‍💻 개발자 노트

- React를 처음 학습하면서 만든 첫 프로젝트
- **풀스택**: 프론트와 백을 분리해서 실제 운영 구조를 경험
- 빠른 구축(1~2일 목표) → 기본 CRUD와 배포에 집중
- 향후 개선: 디자인 고도화, AWS 배포

---

## 📄 License
이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.
