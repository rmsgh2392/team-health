<template>
  <div>
    <v-btn color="black" dark fixed center @click="dialog = !dialog" style="font-size:15px">회원가입</v-btn>
    <v-dialog v-model="dialog" width="700px">
      <v-card>
        <v-card-title class="indigo" font-color="white" color="red">회원가입</v-card-title>
        <v-container fluid>
          <v-form ref="form" v-model="valid" lazy-validation max-width="100">
            <v-text-field
              v-model="uid"
              :counter="10"
              :rules="nameRules"
              label="userid"
              required
              loading
            ></v-text-field>
            <v-text-field
              v-model="pwd"
              :rules="passRules"
              label="password"
              :counter="12"
              required
              loading
            ></v-text-field>
            <v-text-field v-model="uname" label="Name" required loading></v-text-field>
            <v-text-field v-model="age" label="Age" required loading></v-text-field>
            <v-col cols="12">
              <header>성별 체크</header>
            </v-col>
            <v-row>
              <v-checkbox
                v-model="gender"
                class="mx-2"
                :label="`${n}`"
                v-for="n of ['남','여']"
                :key="n"
              ></v-checkbox>
            </v-row>
            <!-- <v-checkbox
              v-model="checkbox"
              label="성별"
              color="red"
              value="red"
              hide-details
            ></v-checkbox>-->
            <!-- <v-radio-group v-model="radios">
              <v-col>
              <v-radio v-for="gender of ['남','여']" :key="gender" :label="`${gender}`" :value="gender">
              </v-radio>
              </v-col>
            </v-radio-group>-->
            <!-- <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="성별"
              required
            ></v-select>-->
            <v-text-field
              v-model="weight"
              :rules="weightRules"
              label="몸무게(kg을 빼고 적어주세요)"
              required
              loading
            ></v-text-field>
            <v-text-field
              v-model="height"
              :rules="heightRules"
              label="키(cm을 빼고 적어주세요)"
              required
              loading
            ></v-text-field>
            <v-text-field v-model="fat" :rules="fatRules" label="제치방량" required loading></v-text-field>
            <v-text-field v-model="muscle" :rules="muscleRules" label="골격근량" required loading></v-text-field>
            <!--adress-->
            <v-row cols="4" sm="1">
              <v-subheader v-text="'거주지'"></v-subheader>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4">
                <v-select
                  v-model="e2"
                  :items="citys"
                  append-outer-icon="map"
                  menu-props="auto"
                  hide-details
                  label="시"
                  single-line
                ></v-select>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field v-model="address"  label="상세주소(도로명 + 지번)" required loading></v-text-field>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
            <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
          </v-form>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="error" @click="dialog = false">CANCEL</v-btn>
          <v-btn  color="success" @click="join">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      valid: true,
      citys: [
        "서울시",
        "경기도",
        "인천시",
        "부산광역시",
        "대구광역시",
        "광주시",
        "대전광역시",
        "울산광역시",
        "세종시",
        "강원도",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주특별자치도"
      ],
      uid: "",
      useridRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "ID must be less than 10 characters"
      ],
      weightRules: [v => !!v || "반드시 입력해주세요"],
      heightRules: [v => !!v || "필수 입력 칸"],
      fatRules: [v => !!v || "필수 입력칸"],
      muscleRules: [v => !!v || "필수 입력칸"],
      pwd: "",
      passRules: [
        v => !!v || "password is required",
        v =>
          (v && v.length <= 12) ||
          "영문&숫자&특수문자를 써서 12글자를 완성하세요!"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    join(){
      alert('회원가입클릭')
    }
  }
};
</script>