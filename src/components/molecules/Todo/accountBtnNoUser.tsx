// LIBRARIES
import React, { useState } from "react";
import Link from "next/link";
import { Avatar, Box, Center, Heading } from "@chakra-ui/react";

// Component Function
const AccountBtnNoUser = () => {
  return (
    <Box my="auto">
      <Center>
        <Heading as="h5" fontSize="xs" fontWeight="semibold">
          <Link href="/account">Login</Link>
        </Heading>
        <Heading as="h5" mx={2} fontSize="xs" fontWeight="semibold">
          or
        </Heading>
        <Heading as="h5" fontSize="xs" fontWeight="semibold" mr={1}>
          <Link href="/account">Sign Up</Link>
        </Heading>
        <Link href="/account" passHref>
          <Avatar size="sm" mx={2} cursor="pointer" />
        </Link>
      </Center>
    </Box>
  );
};
export default AccountBtnNoUser;
