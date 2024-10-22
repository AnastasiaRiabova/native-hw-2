import { useState } from "react";
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordField";
import { AddButton } from "@/components/AddButton";
import { Input } from "@/components/Input";
import { Header } from "@/components/Header";
import {screensStyles} from "@/Screens/screensStyles";

type LoginScreenProps = {
  onChangeView: () => void;
};

export default function LoginScreen({ onChangeView }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log({ email, password });
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={screensStyles.wrapper}>
        <Image
          source={require("@/assets/images/backgroundImage.jpg")}
          style={screensStyles.backgroundImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={screensStyles.container}>
            <View style={screensStyles.importImage}>
              <Image style={screensStyles.userIcon} />
              <AddButton
                onPress={() => console.log("Add")}
                style={screensStyles.addButton}
              />
            </View>
            <Header style={screensStyles.header} title="Увійти" />
            <View style={screensStyles.formContainer}>
              <Input
                onChangeText={setEmail}
                value={email}
                autoComplete="email"
                placeholder="Адреса електронної пошти"
                secureTextEntry={false}
              />
              <PasswordInput
                type="new-password"
                onChangeText={(item: string) => setPassword(item)}
                value={password}
              />
              <View style={screensStyles.signIn}>
                <Button title="Увійти" onPress={handleSubmit} />
                <Button
                  onPress={onChangeView}
                  variant="transparent"
                  title="Немає акаунту?"
                  underLineTitle={"Зареєструватися"}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
