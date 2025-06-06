import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { PostList } from "../../post/PostList";
import { FlashMessage } from "../../components/parts/FlashMessage";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { LoginModal } from "../auth/LoginModal";
import { Login } from "../auth/Login";

export const Post = () => {
  const { flashMessage } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);
  const { isLoginModalOpen } = useContext(AuthContext);
  return (
    <div className="layout">
      <FlashMessage message={flashMessage} />
      <SidebarLeft />
      <main className="main flex-item">
        <PostList />
      </main>
      <SidebarRight />
      {!currentUser && isLoginModalOpen && <LoginModal />}
    </div>
  );
};
