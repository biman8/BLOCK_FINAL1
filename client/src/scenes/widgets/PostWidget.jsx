import {Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";

const PostWidget = ({
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
}) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="500px"
          alt="post"
          style={{ marginTop: "0.75rem", objectFit: "fill" }}
          src={`http://localhost:6001/assets/${picturePath}`}
        />
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
