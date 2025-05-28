import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function SignupScreen() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChangeInput = (name: string, text: string) => {
    setValues((prev) => {
      return { ...prev, [name]: text };
    });
  };

  const handleSubmit = () => {
    if (values.email.length === 0) {
      setError((prev) => ({ ...prev, email: "이메일을 입력해주세요" }));
    }
  };

  return (
    <>
      <View style={styles.container}>
        <InputField
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={values.email}
          onChangeText={(text) => handleChangeInput("email", text)}
          error={error.email}
        />
        <InputField
          label="비밀번호"
          placeholder="비밀번호을 입력해주세요."
          value={values.password}
          onChangeText={(text) => handleChangeInput("password", text)}
        />
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호을 입력해주세요."
          value={values.passwordConfirm}
          onChangeText={(text) => handleChangeInput("passwordConfirm", text)}
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPressIn={handleSubmit} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
