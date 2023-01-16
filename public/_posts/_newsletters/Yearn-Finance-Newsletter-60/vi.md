---
layout: post
title: "Bản tin Yearn Finance #60"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 1000
  height: 500
author: Yearn
date: '2022-04-13'
translator: 🤖💵💵💰💰.eth
---

### Tuần Kết thúc Ngày 12/04/2022

![](./cover.jpg?w=1000&h=500)

Chào mừng các bạn đến với Bản tin Yearn.Finance Số #60! Chúng tôi hy vọng sẽ truyền tải được những dữ kiện mới nhất cho cộng đồng tiền mã thuật số (`crypto`) nói chung lẫn cộng đồng Yearn nói riêng; từ phát hành sản phẩm, thay đổi trong quản trị đến nhiều dự án đối tác trực thuộc hệ sinh thái Yearn. Nếu quan tâm và muốn biết thêm chi tiết về Yearn.Finance, hãy theo dõi tài khoản [Twitter](https://twitter.com/iearnfinance), [Medium](https://medium.com/iearn) cũng như [blog Tiếng Việt](https://blog.yearn.finance/vi/) chính thức của chúng tôi.

## Tóm tắt

- Khao khát Yearn
- Cuộc Chuẩn hóa Kho bạc Vĩ đại
- Cách Công nghệ Web3 giúp Yearn Không thể bị Kiểm duyệt
- Chiến lược yVault Ra đời Như Thế nào
- Mách nước cho Đóng góp viên ĐAO mới
- Các Kho bạc (`Vault`) tại Yearn
- Tin tức trong Hệ Sinh thái

# Khao khát Yearn

![](./image2.jpg?w=1000&h=563)

Một báo cáo Premium về Yearn từ Messari giờ đã khả dụng cho tất cả. Lúc đầu chỉ dành riêng cho những ai đặt mua dài hạn của họ ở tháng 11, bài viết này có chứa nhiều dữ liệu và giải thích quý giá.

Một số trích đoạn như sau: "Tất cả chúng ta đều biết Yearn. Nó là nền tảng tổng hợp hoa lợi "vào-rồi-khỏi-lo" chạy trên các giao thức tạo lãi suất khác của ĐeFi như Compound, Aave, Curve và Convex. Người dùng có thể ngồi không hưởng lợi với chỉ một cú click chuột. Qua thời gian, giao thức này đã trở thành biểu tượng hoa lợi và làm nên tên tuổi trong ngành–một nguồn lãi suất đỡ-rủi-ro hàng đầu... Sản phẩm chính của nó được hầu hết mọi người sử dụng: Các Kho bạc đem lại 67% Tổng Giá trị Ký gửi (TVL) cho Yearn. Người dùng ký gửi vào một kho bạc, được định theo mỗi tài sản, và chiến lược lãi suất nền sẽ thực hiện triển khai số vốn đó... Yearn đem lại một điểm tích hợp thống nhất, đáng tin cậy cho những giao thức khác lấy hoa lợi để khỏi tốn thời gian cũng như rủi ro khi tự quản lý và duy trì chiến lược... Yearn sẽ còn tăng trưởng cao đến đâu nữa tùy thuộc vào giao diện UI V3, chiến lược đa chuỗi và khả năng bảo vệ vị thế của mình trong tương lai”.

Fantom và Arbitrum đã chính thức ra mắt. Tiếp theo là gì?

Đọc toàn bộ nội dung trên tại [messari.io/article/yearning-for-yearn](messari.io/article/yearning-for-yearn).

# Cuộc Chuẩn hóa Kho bạc Vĩ đại

![](./image3.jpg?w=900&h=577)

Bạn đã quen với ERC-20, ERC-721 và ERC-1155. Rất sớm thôi, bạn sẽ biết đến ERC-4626. Tiêu chuẩn Tôken hóa Kho bạc (ERC-4626) đã hoàn thành. Và Cuộc Chuẩn hóa Kho bạc Vĩ đại bắt đầu từ lúc này.

Đây là tóm tắt về ERC-4626: Tôken mang-lãi-suất hiện vô cùng lộn xộn. Nền tảng tổng hợp hoa lợi, kho bạc, thị trường cho vay và tôken tự-sinh-lãi-suất như $xSUSHI thường được triển khai với nhiều thay đổi nhỏ. Khi muốn xây dựng một ứng dụng duy nhất trên nền các tôken mang-lãi-suất của ĐeFi, chúng ta phải lập trình hàng tá bộ thích ứng phức tạp, dễ lỗi để xử lý từng biến thể riêng.

ERC-4626 sẽ biến điều này thành quá khứ. Nó đem lại khả năng tương thích ở mức cao nhất. Xây dựng một ứng dụng trên nền một kho bạc ERC-4626, nó sẽ tương thích với mọi tôken ERC-4626 khác.

Yearn V3 vận dụng ERC-4626 là điều tất yếu. Các đóng góp viên đã và đang làm việc chăm chỉ để áp dụng tiêu chuẩn này cho kho bạc V3 của Yearn rồi. Tương tự là lập trình viên ở Alchemix, Balancer, Rari Capital, Fei Protocol, Yield Protocol, OpenZeppelin, v.v... Có lẽ một ngày nào đó, chúng ta thậm chí còn thấy cả mục ERC-4626 trên Etherscan. Nói cách khác, ERC-4626 sẽ trở thành tiêu chuẩn vàng cho bất cứ loại tôken mang-lãi-suất nào... từ Kho bạc Yearn cho đến ký gửi AAVE hay bể tuyến tính ở Balancer.

Sẵn sàng hưởng ứng Cuộc Chuẩn hóa Kho bạc Vĩ đại? Xem ngay bài viết của Joey Santoro để biết thêm chi tiết, cũng như bản triển khai cơ bản do transmissions11 thực hiện.

Tương lai là phải tương thích.

Muốn nhiều mã lập trình hơn? Kiểm tra [bản triển khai mẫu ERC-4626 Vyper 0.3.2](https://github.com/fubuloubu/ERC4626) do đóng góp viên của Yearn là fubuloubu và banteg viết cùng transmissions11 và Joey Santoro.

Đọc bài viết theo dõi sát sao của CoinDesk về ERC-4626 [tại đây](https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/).

# Cách Công nghệ Web3 giúp Yearn Không thể bị Kiểm duyệt

![](./image4.jpg?w=900&h=451)

Mục tiêu vĩ đại của Web3 là một mạng Internet (và hệ thống tài chính) không bao giờ "sập", không thể bị kiểm duyệt, và ai ai cũng có thể sử dụng.

Chuỗi khối (`blockchain`) và tự-tạo-lưu-trữ (`self-hosting`) biến điều đó thành hiện thực. Muốn biết làm sao để sử dụng Yearn, Uniswap và các ứng dụng Web3 khác mà không cần đến website chính thức? Ở mô hình Web2, nếu trang web chính "sập", người dùng cuối chỉ biết ngồi khóc. Ở Web3, dịch vụ luôn luôn khả dụng cho bất cứ ai có kết nối mạng Internet (tất nhiên với điều kiện chuỗi khối nền vẫn trực tuyến).

Do Web3 toàn mã nguồn mở, bạn có thể sử dụng Yearn, Uniswap và các dịch vụ Web3 khác bằng cách tải tệp lập trình gốc rồi tự-tạo-lưu-trữ trang web tương ứng một cách trực tiếp trên máy tính của mình. Không cần máy chủ bên-thứ-ba nào cả!

Để tự-tạo-lưu-trữ, tất cả những gì bạn cần là một chiếc máy tính (Windows, Mac hay Linux) và vài phần mềm đặc biệt. Sau khi cài đặt xong, bạn có thể sử dụng Yearn và các dịch vụ khác ngay trên trình duyệt của mình mà không cần đến URL chính (thay vào đó là dòng địa chỉ "localhost:3000").

Click [vào đây](https://medium.com/iearn/self-hosting-web3-services-299306b706ee) để tiêu diệt kẻ trung gian Web2 và hiện thực hóa tầm nhìn vĩ đại của Web3 bằng một bài hướng dẫn đơn giản từ tác giả MarcoWorms.

# Chiến lược yVault Ra đời Như Thế nào

![](./image5.jpg?w=900&h=650)

Các chiến lược là xương sống của Yearn, với mỗi kho bạc chứa nhiều chiến lược. Để giúp người dùng thu được hoa lợi tối ưu mà đỡ-rủi-ro nhất ĐeFi, chúng tôi phải liên tục bắt kịp sự thay đổi chóng mặt của thế giới tiền mã thuật số và lập trình nhiều chiến lược mới. Trên đây là hướng dẫn cách chiến lược yVault mới viết được duyệt thông qua để chính thức hoạt động.

Xem ngay [bài viết này](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d) từ MarcoWorms–đóng góp viên của Yearn–để biết thêm chi tiết.

# Mách nước cho Đóng góp viên ĐAO mới

![](./image6.jpg?w=900&h=473)

Văn hóa của Yearn là toàn cầu, thân thiện, hình thành từ nhiều kiến trúc sư, cộng tác viên và những người chủ động. Dù tiền bạc có vẻ như là lý do chính để gia nhập hầu hết các ĐAO, tham dự Yearn ĐAO đem lại một trải nghiệm đầy ý nghĩa, một cơ hội xung kích đi tiên phong trong thế giới liên tục thay đổi.

Ở các ĐAO như Yearn, bạn có thể làm chủ bằng cách tự lãnh trách nhiệm cho kết quả của mình, có quyền ra quyết định để đạt được kết quả đó.

Sau đây là một số chia sẻ từ hàng loạt đóng góp viên của Yearn thuộc mọi ngả đời, hy vọng sẽ giúp ích cho người mới:

Tracheopteryx, một trong các đóng góp viên quản trị chủ chốt của chúng tôi, nói rằng: "Cứ làm cái mình thích, mình giỏi nhất, có thể được trả công, trong khi đáp ứng nhu cầu của ĐAO". Ngoài ra, Storming0x, người tập trung vào bảo an và phát triển giao thức, chia sẻ: “Tích cực tham gia, đừng sợ làm phiền hay ngại hỏi. Rất nhiều người ở đây luôn sẵn sàng giúp đỡ "lính mới", và chúng tôi có quá trình tiếp nhận tốt hơn ngày xưa gấp bội”. Cuối cùng, một đóng góp viên ẩn danh cho biết: “1. Hiểu văn hóa của chúng tôi. Đọc mọi thứ có liên quan. 2. Tạo sự tin tưởng. 3. Quyết định đánh đổi cái gì để tham gia. 4. Viết tư liệu tiếp nhận. 5. Gặp gỡ tất cả mọi người. 6. Tìm hiểu xem cái gì đang diễn ra. 7. Có chính kiến về hướng đó. 8. Ủy nhiệm”.

Xem toàn bộ nội dung [tại đây](https://medium.com/iearn/tips-for-new-contributors-4e978d6b73d), cảm ơn tác giả Kish đã tổng hợp nhiều kinh nghiệm quý báu từ đóng góp viên của Yearn cho người mới để tiếp cận ĐAO với kiến thức sâu rộng hơn.

Chúng tôi mời bạn tham gia, góp ý cùng cộng đồng Yearn qua [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) hay [Github](http://github.com/yearn). Đến đây xây dựng với chúng tôi!

# Các Kho bạc (`Vault`) tại Yearn

Bạn có thể đọc mô tả chi tiết các chiến lược của mọi yVault đang hoạt động [tại đây](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Tin tức trong Hệ Sinh thái

[Các kho bạc MAI tận dụng nhiều chiến lược của Yearn ở mức lãi suất 0% giờ đã xuất hiện trên Fantom](https://twitter.com/QiDaoProtocol/status/1511787974383521805)

[Trang web yearn.watch mới đang được phát triển](https://watch.major.tax/)

[Đọc cảm nghĩ của storming0x về Yearn trong một buổi phỏng vấn "Trường Nội trú" YFI](https://twitter.com/YFI_interns/status/1510244675671793670?s=20&t=27yxNtksWs-le96KTQVXrw)

[Mẹo bảo an từ một đóng góp viên của Yearn](https://twitter.com/storming0x/status/1509769575021178886)

[Xem ngay cập nhật Coordinape mới](https://twitter.com/coordinape/status/1512247042806005763)
