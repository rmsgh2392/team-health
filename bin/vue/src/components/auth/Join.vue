<template>
  <div>
    <div class="container">
      <h1 class="title" align="center">Welcom to HellChang World!!</h1>
      <table style="background-color: white; opacity: 70; position : relative;">
        <tr bgcolor="#ECECEC" align="left">
          <td colspan="2" align="center" style="width: 20px">회원가입을 환영합니다!!</td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC" style="width: 20%">아이디</td>
          <td>
            <input  type="text" id="id" size="12" maxlength="12" />
            <button type="button" id="overlapId" size="12" style="width:25%;">ID 중복체크</button>
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">패스워드</td>
          <td>
            <input type="password" id="pwd" size="12" maxlength="20" />
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">이름</td>
          <td>
            <input type="text" id="name" size="12" maxlength="20" />
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">체중</td>
          <td>
            <input type="text" id="weight" size="12" maxlength="3" />kg
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">신장</td>
          <td>
            <input type="text" id="height" size="12" maxlength="3" />cm
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">성별</td>
          <td>
            <input type="radio" style="align-content: left;" id="sex1" name="ddlRaido" value="1" />남
            <input type="radio" style="align-content: left;" id="sex2" name="ddlRaido" value="2" />여
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">나이</td>
          <td>
            <input type="text" id="age" size="12" maxlength="3" />
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">운동경력 (레벨)</td>
          <td>
            <select id="level" style="vertical-align:left; width: 20%;">
              <option value="1">★</option>
              <option value="2">★★</option>
              <option value="3">★★★</option>
              <option value="4">★★★★</option>
              <option value="5">★★★★★</option>
            </select>
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">근골격</td>
          <td>
            <input type="text" id="muscle" size="12" maxlength="20" />%
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">체지방률</td>
          <td>
            <input type="text" id="fat" size="12" maxlength="20" />%
          </td>
        </tr>
        <tr>
          <td bgcolor="#ECECEC">주소</td>
          <td>
            <input type="text" id="address1" size="12" maxlength="20" style="width: 100%;" />
            <br />
            <input type="text" id="address2" size="12" maxlength="30" style="width: 100%;" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
  width: 100%;
  height: 145%;
  position: relative;
  z-index: 1;
}
.container::after {
  width: 100%;
  height: 200%;
  content: "";
  background-image: url('~@/assets/img/gym_160.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0.8;
}
.title {
  font-size: 30px;
}
</style>