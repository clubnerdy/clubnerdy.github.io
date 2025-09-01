import React, { useEffect, useState } from "react";
import "../styles/gueast_book.css";
import chevronDownIcon from "../assets/img/chevron-down.svg";
import axios from "axios";

interface Message {
  id: number;
  nickname: string;
  content: string;
  createdAt: string;
}

function GuestBook() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  // 서버에서 목록 불러오기
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get<Message[]>("/api/messages");
      setMessages(res.data);
    } catch (err) {
      console.error("메시지 목록 불러오기 실패:", err);
    }
  };

  // 메시지 작성
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !content.trim()) return;

    try {
      const res = await axios.post<Message>("/api/messages", {
        nickname: nickname.trim(),
        content: content.trim(),
      });
      // 새 메시지를 목록 맨 위에 추가
      setMessages([res.data, ...messages]);
      setNickname("");
      setContent("");
    } catch (err) {
      console.error("메시지 작성 실패:", err);
    }
  };

  // 메시지 삭제
  // const handleDelete = async (id: number) => {
  //   try {
  //     await axios.delete(`/api/messages/${id}`);
  //     setMessages(messages.filter((m) => m.id !== id));
  //   } catch (err) {
  //     console.error("메시지 삭제 실패:", err);
  //   }
  // };

  // 메시지 더보기
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleMessages = messages.slice(0, visibleCount);

  return (
    <div className="main-frame">
      <div className="guest-book-container">
        <div className="guest-book-header">
          <p className="heading-description">Guestbook</p>
          <h1 className="heading-title">신랑, 신부에게</h1>
          <p className="heading-title">축하메세지를 남겨주세요</p>
        </div>

        <div className="guest-book-content">
          {/* 메시지 작성 섹션 */}
          <div className="message-form-section">
            <h2 className="form-title">메세지 남기기</h2>
            <form onSubmit={handleSubmit} className="message-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="성함"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="name-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="내용을 작성해주세요"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="content-input"
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                작성
              </button>
            </form>
          </div>

          {/* 기존 메시지 목록 */}
          <div className="messages-section">
            <div className="messages-list">
              {visibleMessages.map((message) => (
                <div key={message.id} className="message-item">
                  <div className="message-header">
                    <p className="sender">
                      from. <span>{message.nickname}</span>
                    </p>
                  </div>
                  <div className="message-content">
                    {message.content.split("\n").map((line, index) => (
                      <p key={index} className="message-line">
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className="message-footer">
                    <span className="message-date">{message.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 더보기 버튼 */}
            {visibleCount < messages.length && (
              <div className="load-more-section">
                <button onClick={handleLoadMore} className="load-more-button">
                  더보기{" "}
                  <img
                    src={chevronDownIcon}
                    alt="chevron-down"
                    className="chevron-icon"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestBook;
