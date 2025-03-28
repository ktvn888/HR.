import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container">
      <motion.h1 className="title" animate={{ scale: 1.1 }}>
        Chào mừng đến với hệ thống tuyển dụng HB Leisure
      </motion.h1>
      <p className="subtitle">Khám phá cơ hội nghề nghiệp cùng chúng tôi!</p>
      <Link to="/jobs">
        <Button className="btn">Xem việc làm</Button>
      </Link>
    </div>
  );
};

export default Home;
