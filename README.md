## 생각을 정리합시다.

| Mobile | Tablet | Desktop | class      |
| ------ | ------ | ------- | ---------- |
| O      | X      | X       | .sm-only   |
| O      | O      | X       | .lg-hidden |
| X      | O      | X       | .md-only   |
| X      | O      | O       | .sm-hidden |
| X      | X      | O       | .lg-only   |
| O      | X      | O       | .md-hidden |

# 내일의 집

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    type="button"
    aria-label="검색창 열기 버튼"
    class="lg-hidden gnb-icon-button is-search"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    aria-label="장바구니 페이지로 이동"
    class="gnb-icon-button is-cart"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    type="button"
    aria-label="검색창 열기 버튼"
    class="lg-hidden gnb-icon-button is-search"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    aria-label="스크랩북 페이지로 이동"
    class="sm-hidden gnb-icon-button"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    aria-label="내 소식 페이지로 이동"
    class="sm-hidden gnb-icon-button"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    href="/"
    aria-label="장바구니 페이지로 이동"
    class="gnb-icon-button is-cart"
  >
    <i class="ic-cart"></i>
    <strong class="badge">4</strong>
  </a>

  <button
    type="button"
    aria-label="마이메뉴 열기 버튼"
    class="sm-hidden gnb-avatar-button"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
    </div>
  </button>
</div>
```
