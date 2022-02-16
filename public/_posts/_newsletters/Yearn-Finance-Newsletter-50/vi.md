---
title: "Yearn Finance Newsletter #50"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: "2021-12-05"
translator: 🤖💵💵💰💰.eth
---

### Tuần Kết thúc Ngày 05/12/2021

![](./cover.jpeg?w=576&h=288)

Chào mừng các bạn đến với Bản tin Yearn.Finance Số #50. Chúng tôi hy vọng sẽ truyền tải được những dữ kiện mới nhất cho cộng đồng tiền mã thuật số (`crypto`) nói chung lẫn cộng đồng Yearn nói riêng; từ phát hành sản phẩm, thay đổi trong quản trị đến nhiều dự án đối tác trực thuộc hệ sinh thái Yearn. Nếu quan tâm và muốn biết thêm chi tiết về Yearn.Finance, hãy theo dõi tài khoản [Twitter](https://twitter.com/iearnfinance), [Medium](https://medium.com/iearn) cũng như [blog Tiếng Việt](https://vietnamese.blog.yearn.finance/) chính thức của chúng tôi.

## Tóm tắt

- Giao diện mới cho Người dùng của Yearn
- Đề xuất Cập nhật Mô hình Kinh tế YFI
- Cập nhật Tư liệu Yearn
- YIP-64 Không Đáp ứng được Túc số
- Yearn Giao phó 23&nbsp;Triệu veCRV cho Convex
- Chiến lược với Snapshot của Yearn
- Các Kho bạc (`Vault`) tại Yearn
- Tin tức trong Hệ Sinh thái

## Giao diện mới cho Người dùng của Yearn

![](./image2.jpg?w=512&h=512)

Chúng tôi đã tái thiết kế [yearn.finance](https://yearn.finance/) từ gốc tới ngọn nhờ hàng ngàn góp ý quý giá của cộng đồng. Ứng dụng với trang web mới đã chính thức phát hành, thậm chí sắp có cả phiên bản Việt hóa hoàn chỉnh.

Một trong những điều thú vị nhất (theo chúng tôi) là tính năng Mô phỏng. Khi ký gửi vào các kho bạc (`vault`) ở những phiên bản UI trước, chúng tôi đã hỗ trợ Zapper để giúp bạn, chẳng hạn như, ký gửi vào kho bạc 3CRV bằng cách dùng ETH hoặc bất cứ tôken nào khác mà Zapper chấp nhận. Điều này vừa nhanh, vừa tiện nhưng rõ ràng có công đoạn bán-đổi (`swap`) xảy ra trong quá trình ký gửi của bạn. Vậy dòng chữ "Đang mô phỏng..." kia nghĩa là? Vâng, đoạn đó nghĩa là hệ thống đang kiểm tra tôken đầu vào với API (`Giao diện Lập trình Ứng dụng`) của Zapper và Tenderly, một dịch vụ tuyệt vời đem lại khả năng mô phỏng giao dịch cho người dùng. Nó tính toán chính xác kết quả đầu ra, như một dạng xem trước tương lai đối với tác vụ ký gửi mà bạn định thực hiện. Ví dụ: ETH>3crv.

Tại sao điều này lại hữu ích và tuyệt vời? Về mặt kỹ thuật, do giao thức chúng tôi tương tác với trạng thái bộ nhớ trực-chuỗi (`on-chain state`), và bộ nhớ này thay đổi liên tục khiến việc ước tính lượng tôken kho bạc mà bạn sắp nhận về không phải dễ. Độ trượt giá mà bạn phải chịu có thể lớn hơn dự kiến, hoặc đường đi của tôken bất ngờ thất bại làm tiêu tốn phí gas, v.v... Tính năng mô phỏng mới sẽ giúp tiết kiệm phí gas cả khi ký gửi lẫn lúc rút.

Nhân tiện, rút ra cũng là một tác vụ khó dự đoán. Trình mô phỏng giúp kiểm tra xem bạn có thể rút được trơn tru với tình trạng hiện tại của kho bạc (`vault`) hay không. Một số kho có thanh khoản cao hơn, tùy theo việc phân bổ của các chiến lược.

Nếu thấy thông báo "Mô phỏng Thất bại...", nhiều khả năng giao dịch sẽ không thể thực hiện được (hoàn nguyên trạng thái) nếu bạn vẫn quyết định làm tới.

Tất nhiên, giao diện UI v3 vẫn còn mới nên nhiều công tác cải thiện tiếp tục diễn ra để giúp trải nghiệm người dùng tuyệt vời hơn nữa.

Kiểm tra ngay nền tảng kỹ thuật đó [tại đây](https://medium.com/iearn/yearn-ui-v3-0-a194355bdb1f). Nếu biết lập trình, hãy hợp sức đóng góp với chúng tôi [ở liên kết này](https://github.com/yearn/yearn-finance-v3).

## Đề xuất Cập nhật Mô hình Kinh tế YFI

Một cuộc biểu quyết qua ứng dụng Snapshot đang diễn ra để trực tiếp thăm dò sự ủng hộ đối với các đề xuất về mô hình kinh tế YFI từ cộng đồng.

Hiện có 5 lựa chọn để bỏ phiếu, chúng lần lượt mang tên `ySplit`, `veYFI`, `xYFI`, `BurnKeYs` và `Status Quo`. [Đề xuất ySplit](https://docs.google.com/document/d/1dAWTkS_ZsXNy7mKKjOFUjILSlLsLz9KhGfLrwVu0GUg/edit) đưa ra luận điểm về việc thị trường hiện tại "thích" đơn vị nhỏ, nên chia tôken YFI thành 10&nbsp;000 hoặc 1&nbsp;000&nbsp;000 phần. [Đề xuất veYFI](https://docs.google.com/document/d/1hoi-IVccOB6iUJYzuApVbyjbQBx8-M0UuzZosb9wlWM/edit) khuyến nghị khóa YFI trong một khoảng thời gian để lấy quyền biểu quyết xem kho bạc (`vault`) nào sẽ nhận được thu nhập của Ngân khố (`Treasury`). [xYFI](https://docs.google.com/document/d/1ev16BXu3bDC8zMSBvHmxMWIeD82ptZck6SJAO5frV5g/edit) yêu cầu tạo kho bạc "đặt cọc" YFI để nhận lợi nhuận từ Ngân khố. [BurnKeYs](https://docs.google.com/document/d/1BqmRsfdfCIaCtNZULdhKqUJzpKdaHE1XOGQlVp2nuSc/edit) đề xuất vô hiệu hóa vĩnh viễn chức năng tạo (`mint`) YFI, từ đó cố định tổng lượng cung ở con số 36&nbsp;666 tôken. `Status Quo` sẽ giữ nguyên mô hình kinh tế YFI hiện tại, tăng công tác truyền thông và làm rõ lợi ích của nó cho những ai đang nắm giữ cũng như các nhà đầu tư tiềm năng, đồng thời tìm kiếm giải pháp tốt hơn.

Biểu quyết ngay tại [trang Snapshot](https://yearn.snapshot.page/#/proposal/0x783cb3d57dd59b2827f6a42967375f06504cc947ebaa3c0e495c7b29ffd47aea). Xin cảm ơn tất cả những thành viên cộng đồng đã đóng góp làm nên bộ đề xuất này. Cập nhật từ nhóm thực hiện, có cả thơ haiku, được đăng tải [tại đây](https://docs.google.com/document/d/1-YEfXqXgTm-qzhPRUKs5allfX1XqYUOYwr_49FApnLU/edit).

## Tư liệu Yearn

Vài tháng trước, các đóng góp viên của chúng tôi lên kế hoạch viết lại tư liệu Yearn cho thân thiện, dễ tiếp cận hơn.

Chúng đã chính thức ra lò để hướng dẫn người dùng, lập trình viên, đối tác và thỏa mãn sự tò mò của tất cả với nhiều mục chưa từng thấy.

Xem ngay tư liệu mới [ở liên kết này](https://docs.yearn.finance/).

## YIP-64 Không Đáp ứng được Túc số

![](./image3.jpg?w=1100&h=759)

`YIP-64: Điều chỉnh phí cho kho bạc không chứa tiền bình giá` đã đi vào giai đoạn biểu quyết và kết thúc với đa số bỏ phiếu phản đối việc thay đổi phí.

Kiểm tra đề xuất nói trên [tại đây](https://snapshot.org/#/ybaby.eth/proposal/0xfe7296601d199b89a8aa53f95d6243ef935d736bea2f13109979d8d5098017d2).

## Yearn Giao phó 23&nbsp;Triệu veCRV cho Convex

![](./image4.jpg?w=873&h=615)

Yearn đã giao phó 23&nbsp;triệu veCRV cho `Convex Finance` bằng tính năng ủy thác kích thưởng nguyên gốc mới của Curve. Điều này sẽ làm tăng hoa lợi của các "bể tự phát" (`factory pool`) cho cả hai ĐAO. Không có thay đổi gì về phí, biểu quyết hay những bể góp vốn thường.

Giao phó veCRV không dùng đến [tại đây](https://convex-boost-delegation.vercel.app/) làm tăng phần thưởng bể tự phát (`factory pool`) cho tất cả những bên tham gia Convex, từ đó đẩy cao lãi suất cho Convex và Yearn. Giao dịch ủy thác của chúng tôi hiện diện [tại đây](https://etherscan.io/tx/0x4734c879b23c678cb97ba90591e16a14f1f7a2e0a7d71bfa67d2e7bb5d718e5f).

## Chiến lược với Snapshot của Yearn

Để chuẩn bị cho một số cuộc bỏ phiếu quan trọng, chiến lược Snapshot của Yearn đã được cập nhật mới.

Giờ đây, bạn có thể biểu quyết bằng YFI ở mọi nơi, từ trong ví, mọi kho bạc Yearn v2, Bancor, Balancer v2, Uniswap v2, Sushi (kể cả MasterChef), MakerDAO, Unit, Instadapp (kể cả MakerDAO).

Hợp đồng (`contract`) tương ứng có thể được kiểm tra [ở liên kết này](https://github.com/yearn/snapshot-strategy) cũng như triển khai [tại đây](https://etherscan.io/address/0xA79e803FffE9DA37477ddaFD7C6F3dbDCa1C566C#code).

## Các Kho bạc (`Vault`) tại Yearn

Bạn có thể đọc mô tả chi tiết các chiến lược của mọi yVault đang hoạt động [tại đây](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Tin tức trong Hệ Sinh thái

[Sử dụng YFI của bạn một cách an toàn trên nền tảng `Qredo Network`](https://twitter.com/QredoNetwork/status/1461031928564436994)

[Nghe `Into the Byte Code` với tracheopteryx](https://twitter.com/benmercerdev/status/1464347991674863626?s=21)

[Steakwallet giờ đã hỗ trợ các Kho bạc (`Vault`) bản Beta của Yearn trên Fantom](https://twitter.com/steakwallet/status/1463623834389602311?s=21)

[Tesseract vào Top&nbsp;5 giao thức tăng trưởng nhanh nhất trên Polygon](https://twitter.com/marketducky/status/1461734313636945926?s=21)

[Xem video "vỡ lòng" Coordinape](https://twitter.com/coordinape/status/1460591450413015043?s=21)

[Xem ngay Yearn trên ví Lớp-2 của Argent để chứng kiến phí giao dịch thấp khó tin, chỉ 2$](https://twitter.com/argentHQ/status/1468934923264401419)

[Các kho bạc của Tesseract đã gia tăng mức trần ký gửi](https://twitter.com/tesseract_fi/status/1468217220966801413)

[Nhận khuyến mãi giảm giá vé ETHDubai bằng cách nắm giữ $yvBOOST hoặc $yvYFI](https://twitter.com/ETHDubaiConf/status/1467068791456923648)

[Xem tiêu điểm của Zapper về Trình Mô phỏng từ Yearn](https://twitter.com/zapper_fi/status/1466447565302517765)

[Nghe Facu tiết lộ nhiều điều về Yearn trên podcast `On the Ledger`](https://twitter.com/Ledger/status/1465678701635506185)

[YFI đã có thể được tiêu dùng trên ứng dụng của Flexa](https://twitter.com/FlexaHQ/status/1469092114038415364)
