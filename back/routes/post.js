const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { afterUploadImage, uploadPost } = require('../controllers/post');
const { isLoggedIn, isOwner } = require('../middlewares');

const router = express.Router();

const { getPosts } = require('../controllers/post');
const { getPostDetail , editPost, deletePost } = require('../controllers/post');
const { getBoardsByShop } = require('../controllers/post');  // 상점별 게시글 리스트 조회

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },    // 이미지.png -> 이미지12312315.png
  }),
 // limits: { fileSize: 5 * 1024 * 1024 },
});


// *** 프론트요청 ***
router.post('/write',isLoggedIn, isOwner, upload.single('image'), uploadPost); // /api/board/write
router.get('/detail/:boardId', getPostDetail); // /api/board/detail/${currentBoardId}
router.put('/modify/:boardId', isLoggedIn, isOwner, editPost); // /api/board/modify/${boardId}
router.delete('/delete/:boardId',isLoggedIn, isOwner, deletePost); // /api/board/delete/${currentBoardId}
router.get('/shop', getBoardsByShop); // 상점별 게시글 리스트 조회,   `/api/board/shop/?searchTerm=${encodeURIComponent(searchTerm)}`
router.get('/',getPosts); // /api/board?page=${setPage.page}

// POST /post/img
router.post('/img', isLoggedIn, upload.single('img'), afterUploadImage);

// POST /post
const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), uploadPost);

module.exports = router;