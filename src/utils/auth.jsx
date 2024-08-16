import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProviderTemp = ({ children }) => {
  const getUserFront = () => {
    return JSON.parse(localStorage.getItem("userBankNum"));
  };
  const loginUserFront = (userFront) => {
    localStorage.setItem("userBankNum", JSON.stringify(userFront));
  };

  const logoutUserFront = () => {
    localStorage.removeItem("userBankNum");
  };

  return (
    <AuthContext.Provider
      value={{ getUserFront, loginUserFront, logoutUserFront }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthTemp = () => {
  return useContext(AuthContext);
};
