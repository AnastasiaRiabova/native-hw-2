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

type RegistrationScreenProps = {
  onChangeView: () => void;
};
export default function RegistrationScreen({
  onChangeView,
}: RegistrationScreenProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Keyboard.dismiss();
    console.log({ email, password, username });
    setUsername("");
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
            <Header style={screensStyles.header} title="Реєстрація" />
            <View style={screensStyles.formContainer}>
              <Input
                onChangeText={setUsername}
                value={username}
                autoComplete="username-new"
                placeholder="Логін"
              />
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
                <Button title="Зареєстуватися" onPress={handleSubmit} />
                <Button
                  onPress={onChangeView}
                  variant="transparent"
                  title="Вже є акаунт?"
                  underLineTitle="Увійти"
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
