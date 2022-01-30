---
layout: post
title: "Bản tin Yearn.Finance Số #55"
categories: [Newsletters]
image: ./Yearn-Finance-Newsletter-55/image1.png
author: Yearn
translator: 🤖💵💵💰💰.eth
publish: true
---

# Bản tin Yearn.Finance Số #55

### Tuần Kết thúc Ngày 23/01/2022

![](image1.png)

Chào mừng các bạn đến với Bản tin Yearn.Finance Số #55! Chúng tôi hy vọng sẽ truyền tải được những dữ kiện mới nhất cho cộng đồng tiền mã thuật số (`crypto`) nói chung lẫn cộng đồng Yearn nói riêng; từ phát hành sản phẩm, thay đổi trong quản trị đến nhiều dự án đối tác trực thuộc hệ sinh thái Yearn. Nếu quan tâm và muốn biết thêm chi tiết về Yearn.Finance, hãy theo dõi tài khoản [Twitter](https://twitter.com/iearnfinance), [Medium](https://medium.com/iearn) cũng như [blog Tiếng Việt](https://vietnamese.blog.yearn.finance/) chính thức của chúng tôi.

## Tóm tắt

- Tình hình các Kho bạc Fantom
- Tiêu điểm Hệ Sinh thái Fantom - Yearn
- Cập nhật Yearn Web
- Hiểu rõ Yearn Finance
- Các Kho bạc (`Vault`) tại Yearn
- Tin tức trong Hệ Sinh thái

# Tình hình các Kho bạc Fantom

![](image2.png)

Với sự thu hút từ dự án Solidly&nbsp;ve(3,3) mới của Andre Cronje & Daniele Sesta, các cuộc "hút&nbsp;máu" `vampire attack` đã xuất hiện ở Fantom nhằm lọt vào danh sách hưởng "Solidly&nbsp;airdrop" cho Top&nbsp;20 dự án theo Tổng Giá trị Ký gửi (TVL) trên Fantom.

Để lợi dụng điều này, bạn có thể gửi tiền của mình vào kho bạc [yearn.finance](https://yearn.finance/#/home) để thoải mái ngồi chơi xơi nước. Yearn tìm kiếm hoa lợi tốt nhất dọc khắp 0xDAO, veDAO, Scream, Curve, Beets, Tarot và hơn nữa. Các kho bạc Fantom của chúng tôi có chiến lược cho tất cả, tự động luân chuyển tới nơi màu mỡ nhất và hiện thực hóa lợi nhuận sau mỗi 30 phút để bạn không trở thành kẻ cuối cùng ôm bịch rác. Chúng tôi cũng sẽ sát cánh lâu dài cùng với người dùng sau khi cuộc chiến hút máu kết thúc, đến khi chúng ta bước sang trang sử hay trang truyện manga mới.

Đến lượt bạn đấy? Nước cờ tiếp theo hiển nhiên là ký gửi ngay vào [yearn.finance/vaults](https://yearn.finance/vaults).


# Tiêu điểm Hệ Sinh thái Fantom - Yearn

![](image3.png)

Tracheopteryx, đóng góp viên của Yearn, cung cấp một cái nhìn tổng quan ngắn gọn về Yearn và sứ mệnh tương ứng, với trọng tâm là người dùng, đối tác cũng như kiến trúc sư thường ngày.

Các sản phẩm cốt lõi của Yearn là các Kho bạc (`Vault`), Iron Bank, Thí điểm (`Labs`) và tôken YFI/WOOFY. Cội nguồn của YFI cũng được khám phá sâu. Tracheopteryx giải thích tại sao Fantom là "chuỗi bên" (`sidechain`) đầu tiên mà Yearn chọn để xây dựng và mở rộng.

Cuộc phỏng vấn kết thúc với những thông tin cập nhật sắp tới về tôken YFI, như đích đến của chương trình mua lại sẽ chuyển sang cho những người nắm giữ, xYFI, veYFI và tỷ xích kho bạc.

Đọc toàn bộ nội dung [tại đây](https://fantom.foundation/blog/fantom-ecosystem-spotlight-yearn/?__cf_chl_rt_tk=rdrT2KHoFbjTe1yyUOmIDA92AeTmrMPKtQW5yT18mwk-1643234302-0-gaNycGzNCH0).

# Cập nhật Yearn Web

![](image4.png)

Tuần này, các cập nhật Yearn Web bao gồm chú giải APY khi trỏ chuột vào trên giao diện UI, cũng như sửa lỗi tiền lẻ lúc rút.

Tiếp sau đó là tăng cường bảo đảm an toàn với chú thích chi tiết, cải thiện UI/UX đa chuỗi và hỗ trợ chuỗi khối (`blockchain`) mới.

Xem nội dung chi tiết [ở liên kết này](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7?r=2y79e&utm_campaign=post&utm_medium=web).

# Hiểu rõ Yearn Finance

![](image5.png)

Kho bạc Yearn đem lại tôken ghi nợ (IOU) được xây dựng bởi các chiến lược gia, những lập trình viên cáng đáng một tiến trình sàng lọc gắt gao để đảm bảo người dùng Yearn thu về hoa lợi tối đa mà đỡ rủi ro nhất.

Một chiến lược trước đây của Yearn có thể thấy ở kho bạc Ethereum v1: Khi người dùng ký gửi ETH, số ETH này được đem thế chấp cho vay MakerDAO, dựa trên đó để vay DAI và ký gửi vào yVault DAI.

Một số thắc mắc phổ biến từ phía người dùng bao gồm "Làm sao/Khi nào Yearn di chuyển tiền trong kho và tính phí?", hay "Làm thế nào Yearn đảm bảo một chiến lược luôn tạo ra tôken lợi nhuận mà không lỗ?” Một trong các tính năng cốt lõi của chiến lược có tên "thu hoạch" (`harvest`). Khi được gọi, nó kích hoạt quá trình tái cân bằng với việc hiện thực hóa lợi nhuận và tái đầu tư vào lại chiến lược. Các chiến lược gia cũng dùng nhiều công cụ để theo dõi dữ liệu trực-chuỗi (`on-chain`) nhằm đảm bảo mọi sự an toàn. Một trong số đó là Yearn&nbsp;Watch, giao diện đẹp mắt với nhiều chỉ số quan trọng, trực tiếp trên chuỗi khối (`blockchain`).

Yearn và Keep3r cũng hợp tác chặt chẽ trong việc tự động hóa những tác vụ cần thiết để đảm bảo hiệu suất của các kho bạc. Nếu muốn xây dựng chiến lược, bạn cần hiểu sâu về ngôn ngữ lập trình Vyper (cho yVault) và Solidity (cho chiến lược). Yêu cầu cơ bản để trở thành chiến lược gia: Am hiểu hệ sinh thái chuỗi khối (`blockchain`) muốn triển khai (có được từ việc nghiên cứu kỹ mô hình kinh tế và tư liệu của mọi tôken liên quan trong chiến lược), kiến thức lập trình Solidity tương đương khi hoàn tất Cấp&nbsp;4 trên CryptoZombies, cũng như thành thạo git, eth-brownie và ganache.

Sau khi nắm rõ cơ bản của các công cụ trên, bạn đã sẵn sàng sao chép mẫu chiến lược của chúng tôi! Những hàm (`function`) có thể thay đổi ở mẫu này cho chiến lược của riêng bạn là: `prepareReturn`, `adjustPosition` và `liquidatePosition`. Mẫu chiến lược nói trên được đăng tải [tại đây](https://github.com/yearn/brownie-strategy-mix).

Xin cảm ơn MarcoWorms về bài viết bổ ích [này](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432).

# Các Kho bạc (`Vault`) tại Yearn

Bạn có thể đọc mô tả chi tiết các chiến lược của mọi yVault đang hoạt động [tại đây](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Tin tức trong Hệ Sinh thái

[Ký gửi trực tiếp vào các kho bạc của Yearn với sự tích hợp mới từ ví Ambire Wallet](https://twitter.com/AmbireWallet/status/1483087593285820416)

[Sử dụng các kho bạc Yearn cho Shapeshift ĐAO](https://twitter.com/ShapeShift_io/status/1484599573289086984)

[Cập nhật mới về sự hợp tác của Tesseract Finance với VESQ](https://twitter.com/tesseract_fi/status/1483484524143128578)

[Yearn đã trở thành ứng dụng tổ hợp hoa lợi Số 1 trên Fantom theo TVL](https://twitter.com/vannny365/status/1484385291947368448)

[Kiểm tra ApeFramework, một thành quả với nhiều sự trợ giúp từ các đóng góp viên của Yearn](https://twitter.com/ApeFramework)

[Đọc bản đánh giá ngắn về Yearn và các chỉ số tương ứng](https://twitter.com/fuuurma/status/1484503576076599298)
