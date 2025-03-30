# Portfolio của Giang Nguyen - IT Recruitment Consultant

Một portfolio hiện đại và tương tác được xây dựng bằng React.js, với các animation đẹp mắt và trải nghiệm người dùng tối ưu.

## Tính năng

- Thiết kế responsive và hiện đại
- Gradient vàng-hồng (#fff7ad → #ffa9f9) làm chủ đạo
- Các animation mượt mà với Framer Motion và GSAP
- Hiệu ứng particle và video background
- Các card 3D và flip animation
- Form liên hệ với validation
- Tối ưu hóa hiệu suất

## Công nghệ sử dụng

- React.js
- TypeScript
- Styled Components
- Framer Motion
- GSAP
- React Scroll
- React Particles
- Three.js
- React Slick
- React Confetti
- React Fireworks
- React Tooltip

## Cài đặt

1. Clone repository:
```bash
git clone https://github.com/yourusername/giang-portfolio.git
```

2. Di chuyển vào thư mục dự án:
```bash
cd giang-portfolio
```

3. Cài đặt dependencies:
```bash
npm install
```

4. Chạy dự án:
```bash
npm start
```

Dự án sẽ chạy tại [http://localhost:3000](http://localhost:3000)

## Cấu trúc dự án

```
src/
  ├── components/         # Các React components
  │   ├── Header/
  │   ├── Hero/
  │   ├── AboutMe/
  │   ├── Education/
  │   ├── Experience/
  │   ├── Skills/
  │   ├── Jobs/
  │   └── Contact/
  ├── styles/            # Global styles và theme
  ├── assets/            # Hình ảnh, video và các tài nguyên khác
  ├── animations/        # Các animation configurations
  ├── hooks/             # Custom React hooks
  ├── utils/             # Các utility functions
  ├── App.tsx           # Component chính
  └── index.tsx         # Entry point
```

## Tùy chỉnh

### Màu sắc
Bạn có thể thay đổi màu sắc chủ đạo bằng cách chỉnh sửa file `src/styles/GlobalStyles.ts`:

```typescript
:root {
  --primary-gradient: linear-gradient(135deg, #fff7ad 0%, #ffa9f9 100%);
  --text-color: #ffffff;
  --border-color: #e0e0e0;
}
```

### Nội dung
Các nội dung có thể được chỉnh sửa trong các component tương ứng trong thư mục `src/components/`.

## Tối ưu hóa

- Sử dụng React.memo() cho các components không cần re-render thường xuyên
- Lazy loading cho các components lớn
- Tối ưu hóa hình ảnh và video
- Code splitting với React.lazy()

## Liên hệ

Giang Nguyen
- Email: giangkimnguyen16@gmail.com
- LinkedIn: [kimgiangbusiness](https://linkedin.com/in/kimgiangbusiness)
- Phone: +84 76897 5267
- Location: Binh Thanh, HCMC
