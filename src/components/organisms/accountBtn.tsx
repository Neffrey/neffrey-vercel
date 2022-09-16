// LIBRARIES
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Avatar, Box, Center, Flex, Heading, HStack } from "@chakra-ui/react";

// COMPONENTS
import AccountBtnUser from "components/molecules/accountBtnUser";
import AccountBtnNoUser from "components/molecules/accountBtnNoUser";

// CONTEXTS
import { UserZustand } from "components/contexts/userStore";

// Component Function
const AccountBtn = () => {
  // // Context
  // const { loginUser, logoutUser, userErrorMsg, userIdToken, userName } =
  //   useContext(UserContext);
  return UserZustand((state) => state.userIdToken) ? <AccountBtnUser /> : <AccountBtnNoUser />;
};
export default AccountBtn;
