import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import TokenWidget from "scenes/widgets/TokenWidget";
const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        // display={isNonMobileScreens ? "flex" : "block"}
        display="flex"
        gap="0.5rem"
        // justifyContent="space-around"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
            {isNonMobileScreens && (
                <Box flexBasis="26%">
                    <FriendListWidget userId={_id} />
                </Box>
            )}
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget userId={_id} picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
          <TokenWidget/>
      </Box>
    </Box>
  );
};

export default HomePage;
