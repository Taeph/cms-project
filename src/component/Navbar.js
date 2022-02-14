import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link" to="/news">교회소식</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/boards">게시판</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/videos">설교영상</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/facility">시설현황/예약</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/users">로그인/회원가입</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
};

export default Navbar;