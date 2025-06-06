// import React, { useContext, useEffect } from "react";
// import { FormButton } from "../../components/parts/FormButton";
// import { InputArea } from "../../components/header/InputArea";
// import { AuthForm } from "../../components/layout/AuthForm";
// import { AuthSubTextRight } from "../../components/parts/AuthSubTextRight";
// import { AuthSnsButton } from "../../components/parts/AuthSnsButton";
// import { AuthFooterButton } from "../../components/parts/AuthFooterButton";
// import { useLogin } from "../../hooks/useLogin";
// import { useNavigation } from "../../hooks/useNavigation";
// import { googleLogin } from "../../services/authService";
// import { AuthContext } from "../../contexts/AuthContext";
// import { CredentialResponse } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const { signinErrors, handleSubmit, generalErrors, email, setEmail, password, setPassword } =
//     useLogin();
//   const { handleNavigate } = useNavigation();
//   const { setCurrentUser, setIsLoggedIn } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Google APIの初期化をuseEffectで行う
//   useEffect(() => {
//     if (window.google) {
//       window.google.accounts.id.initialize({
//         client_id:
//         callback: (response: CredentialResponse) => {
//           const { credential } = response;
//           if (credential) {
//             handleLogin(credential);
//             navigate("/");
//             debugger;
//           } else {
//             console.error("Google login failed: No credential received");
//           }
//         },
//       });
//     }
//   }, []); // 初回レンダリング時にだけ実行

//   const handleLogin = async (credential: string) => {
//     // トークンをバックエンドに送信
//     try {
//       const res = await googleLogin(credential);
//       debugger;
//       setIsLoggedIn(true);
//       setCurrentUser(res.data.user);
//     } catch (error) {
//       debugger;
//       console.error("Login failed:", error);
//       // エラーメッセージなどを表示する処理を追加すると良い
//     }
//   };

//   const handleGoogleLogin = () => {
//     console.log("Google login button clicked"); // ログを追加
//     if (window.google) {
//       window.google.accounts.id.prompt();
//     } else {
//       console.log("Google API not available");
//     }
//   };

//   return (
//     <AuthForm onSubmit={handleSubmit(false)}>
//       <p className="text-red-600 text-sm">{generalErrors}</p>
//       <InputArea placeholder="メールアドレス" value={email} onChange={setEmail} type="email" />
//       {signinErrors.email.map((mail, index) => (
//         <p className="text-red-600 text-sm" key={index}>
//           メールアドレス{mail}
//         </p>
//       ))}
//       <InputArea placeholder="パスワード" value={password} onChange={setPassword} type="password" />
//       {signinErrors.password.map((pass, index) => (
//         <p className="text-red-600 text-sm" key={index}>
//           パスワード{pass}
//         </p>
//       ))}
//       <AuthSubTextRight onClick={() => handleNavigate("/forgot-password")}>
//         パスワードをお忘れですか？
//       </AuthSubTextRight>
//       <FormButton>ログイン</FormButton>
//       <AuthSnsButton onClick={handleGoogleLogin}>Googleでログインする</AuthSnsButton>
//       <AuthFooterButton onClick={() => handleNavigate("/signup")}>新規会員登録</AuthFooterButton>
//     </AuthForm>
//   );
// };
