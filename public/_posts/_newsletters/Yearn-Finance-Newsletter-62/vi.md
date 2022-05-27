---
layout: post
title: "Bản tin Yearn Finance #62"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-05-23'
translator: 🤖💵💵💰💰.eth
---

![](./image1.jpg?w=900&h=453)

Chào mừng các bạn đến với Bản tin Yearn.Finance Số #62! Chúng tôi hy vọng sẽ truyền tải được những dữ kiện mới nhất cho cộng đồng tiền mã thuật số (`crypto`) nói chung lẫn cộng đồng Yearn nói riêng; từ phát hành sản phẩm, thay đổi trong quản trị đến nhiều dự án đối tác trực thuộc hệ sinh thái Yearn. Nếu quan tâm và muốn biết thêm chi tiết về Yearn.Finance, hãy theo dõi tài khoản [Twitter](https://twitter.com/iearnfinance), [Medium](https://medium.com/iearn) cũng như [blog Tiếng Việt](https://blog.yearn.finance/vi/) chính thức của chúng tôi.

**Tóm tắt**

- Kho bạc V3 Sắp Tới
- Trang Yearn Watch Mới
- Danh sách Yearn Cho phép (`Allowlist`)
- Gương mặt Yearn: MarcoWorms
- Yearn Muốn Mua YFI của Bạn
- Các Kho bạc (`Vault`) tại Yearn
- Tin tức trong Hệ Sinh thái

## Kho bạc V3 Sắp Tới

![](./image2.jpg?w=900&h=429)

Kho bạc Yearn v3 là bản đại tu hoàn toàn hệ thống của chúng tôi, và sau đây là sáu tính năng hàng đầu hân hạnh ra mắt.

Phân ngạch Nguy Cao: Yearn đã luôn tập trung tâm huyết vào kho bạc "chỉ tăng lên" - những yVault làm mọi cách có thể để tránh "hack" hay thua lỗ. Với sự bảo mật/an toàn cao hơn, cái phải đánh đổi thường là lợi suất thấp hơn. v3 sẽ giới thiệu "phân ngạch nguy cao" bằng những kho bạc rủi ro nhiều hơn, lợi nhuận lớn hơn.

Solidity: Kho bạc v2 được viết theo ngôn ngữ lập trình Vyper, nhưng sang v3 sẽ sử dụng Solidity. Điều này nghĩa là Yearn có thể tiếp cận lượng lập trình viên lớn hơn (theo DefiLlama, ~69% mã lập trình ĐeFi được viết theo Solidity so với ~10% bằng Vyper). Hơn nữa, lợi cả đôi đường, fan hâm mộ Vyper vẫn có thể sử dụng nó với các mô-đun v3.

Chuẩn hóa tôken kho bạc bằng ERC-4626: Các đóng góp viên Yearn đã giúp tạo ra một tiêu chuẩn tôken mới cho Ethereum: ERC-4626. Tôken mang-lãi-suất của v3 sẽ tương thích hoàn toàn với mọi dự án khác xây dựng trên ERC-4626.

Tối ưu hóa phí Gas: Các chiến lược gia sử dụng ySwaps để thực hiện đổi (`swap`) tôken ngay trong kho bạc. Hàng loạt cải thiện mã lập trình sẽ khiến tác vụ này cũng như nhiều công đoạn khác tiết kiệm phí gas triệt để hơn, từ đó tăng APY cho mọi kho bạc.

Chiến lược linh hoạt: Nhiều chiến lược với tính mô-đun tốt hơn sẽ khiến kho bạc Yearn uyển chuyển gấp bội. Chúng không còn bị giới hạn 20 chiến lược mỗi kho bạc nữa, còn các đối tác thậm chí có thể chia sẻ quyền kiểm soát qua tính năng quản lý yVault. Chúng tôi rất nóng lòng chờ xem những giao thức khác sẽ tận dụng Yearn v3 tuyệt vời như thế nào.

Tự động hóa: Bằng cách tận dụng Keep3r Network, Yearn v3 sẽ tự động hóa gần như mọi khía cạnh quản lý kho bạc. v3 sẽ đưa mục tiêu tự động hóa 100% kho bạc trong tầm nhìn. Và nó giúp bảo vệ tốt hơn trước MEV (một hiện tượng được gọi là "trích xuất tối đa giá trị" từ việc tạo chuỗi khối mới) bằng cách thu hoạch theo thời gian thực.

V3 là bản nâng cấp lớn nhất lịch sử Yearn.

Với các phân ngạch nguy cao, mô-đun hóa, tôken mang-lãi-suất tương thích hoàn toàn và ngôn ngữ lập trình dễ tiếp cận hơn, v3 hứa hẹn sẽ đổ thêm nhiên liệu vào quả tên lửa đổi mới của Yearn.

Như lời của Skeletor Spaceman, "Chúng ta muốn phát triển nhanh mà không làm hỏng mọi thứ". v3 là cách Yearn tiếp cận mục tiêu đó. Màn pháo hoa điên cuồng sắp đến.

Đọc thêm về Kho bạc v3 [tại đây](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0).

Chúng tôi mời bạn tham gia, góp ý cùng cộng đồng Yearn qua [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) hay [Github](http://github.com/yearn). Đến đây xây dựng với chúng tôi!

## Trang Yearn Watch Mới

![](./image3.jpg?w=900&h=705)

Trang [yearn.watch](https://yearn.watch/) cách tân đã chính thức phát hành với nhiều nâng cấp.

Chúng bao gồm thời gian tải cực nhanh, giao diện trải nghiệm UI/UX mới, hàng loạt cải thiện, cũng như thông tin báo động.

Rất nhiều chi tiết đã được bổ sung, kèm đồ họa trực quan thể hiện rủi ro, v.v... Vô số nội dung khác sẽ sớm ra mắt, tất cả nhờ một ê-kíp đóng góp viên mới, tích cực, năng nổ.

## Danh sách Yearn Cho phép (`Allowlist`)

![](./image4.jpg?w=900&h=429)

Để khiến website Yearn an toàn hơn nữa, chúng tôi đã phát triển một tính năng mới gọi là "Danh sách Cho phép" (`Allowlist`). Về cơ bản, nó đối chứng mọi giao dịch thực hiện qua trang web/SDK "chính chủ" với một hợp đồng trực-chuỗi (`on-chain contract`) lưu dữ liệu về tất cả `calldata` hợp lệ, đúng đắn mà website có thể tạo ra.

Nói cách khác, điều này giúp trang web "thật" tránh khỏi nhiều kiểu tấn công trung gian khi dữ liệu được cấp cho website, dù là qua API của Zapper/0x hay của riêng Yearn. Chẳng hạn, nếu API của Yearn trả về danh sách các kho bạc có địa chỉ "độc hại", với dã tâm "dụ" người dùng Duyệt thông qua một trong số chúng khi ký gửi, Danh sách Cho phép (`Allowlist`) sẽ chặn không cho giao dịch đó được thực hiện.

Chúng tôi mong các giao thức khác cũng sẽ vận dụng Danh sách Cho phép (`Allowlist`) của riêng mình để tăng cường tính an toàn. Hướng dẫn tạo Danh sách Cho phép (`Allowlist`) của riêng bạn được trình bày chi tiết sau đây.

Click [liên kết này](https://medium.com/iearn/yearn-allowlist-71757d4e3cf4) để tìm hiểu thêm về Danh sách Yearn Cho phép.

## Gương mặt Yearn: MarcoWorms

![](./image5.jpg?w=380&h=380)

MarcoWorms là một đóng góp viên của Yearn thực hiện việc quảng bá, soạn thảo nhiều nội dung mà bạn thường thấy trong các bản tin này cũng như trên Twitter.

Trước khi gia nhập Yearn, Marco mày mò nghiên cứu tiền mã thuật số (`crypto`) và ngán ngẩm với "cú lừa" của "công nghệ tài chính" (`fintech`) cũng như mô hình đầu tư mạo hiểm (VC). Marco phát hiện ra Yearn sau khi tìm hiểu về ĐeFi và đọc tuyên ngôn "Viên Thuốc Xanh".

Tại Yearn, Marco thường dành thời gian trong ngày để cộng tác hoặc soạn bài viết mới. Nếu không thảo nội dung, MarcoWorms thường trực trong các kênh mạng xã hội của Yearn để giúp đỡ mọi người có thắc mắc.

Như đã nói, Yearn thúc đẩy một văn hóa thoải mái, giúp mọi người bất kể xuất thân có thể phát triển thành công, và MarcoWorms nhận ra rằng chúng tôi thực sự khuyến khích đóng góp viên làm những gì họ tin vào.

Xem [toàn bộ bài phỏng vấn](https://medium.com/iearn/people-of-yearn-marco-worms-c9bb139d278e) từ Defiglenn–một đóng góp viên khác của Yearn.

## Yearn Muốn Mua YFI của Bạn

![](./image6.jpg?w=900&h=450)

Nghe nói một số người đang bán tháo.

Tuyệt vời, vì chúng tôi đang mua.

Do YFI đóng vai trò cốt yếu trong việc xây dựng Yearn (đặc biệt ở chính sách đãi ngộ và gìn giữ nhân tài), chúng tôi không ngừng mua lại đồng YFI từ thị trường tự do. Kể từ bây giờ, chúng tôi sẽ triển khai hệ thống này thay vì mua theo lệnh-thị-trường (`market-buy`) một cách thủ công.

"Heo đất" mua-lại của chúng tôi sẽ thường xuyên được nạp đồng ĐAI để luôn sẵn sàng mua YFI của mọi người ở giá hiện tại, theo nguồn cấp dữ liệu (`oracle`) từ Chainlink. Chỉ số thống kê giờ theo thời gian thực, đảm bảo sự minh bạch cao nhất về hoạt động mua lại.

[https://yearn.clinic](https://yearn.clinic/) hoặc [https://buyback.yearn.finance/](https://buyback.yearn.finance/) là các liên kết để bán YFI cho chúng tôi.

## Các Kho bạc (`Vault`) tại Yearn

Bạn có thể đọc mô tả chi tiết các chiến lược của mọi yVault đang hoạt động [tại đây](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Tin tức trong Hệ Sinh thái

[YFI đã có thêm tính năng bảo mật thông tin cá nhân riêng tư nhờ Incognito Chain](https://twitter.com/IncognitoChain/status/1527045614273544200)

[Sturdy Finance đang có APY cao nhất với USDC dọc khắp mọi chuỗi khối, được cấp lực bởi Yearn](https://twitter.com/pgpsam/status/1526301386173992961)

[Các chiến lược Bancor v3 sắp đến với Yearn](https://twitter.com/iearnfinance/status/1524417579539779585?s=20&t=cFsaa8mpS97O9Gvbhjm0iQ)

[Starkswap ra mắt Iron Fleet với sự hợp tác cùng Yearn](https://twitter.com/starkswap/status/1523695464180510721?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Xem một hội thảo Yearn từ Skeletor Spaceman](https://twitter.com/iearnfinance/status/1524491263344533506?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Các bể góp vốn Yearn giờ có thể được theo dõi riêng lẻ trên DefiLlama](https://twitter.com/DefiLlama/status/1524968130967216146?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Một tân kho bạc Lido stETH đã được phát hành cho bể góp vốn nồng độ cao (`concentrated pool`) mới của Curve](https://twitter.com/iearnfinance/status/1524913700334731264?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Xem bản ghi về cuộc thảo luận Coordinape gần đây](https://twitter.com/YFI_interns/status/1525159821321830403)
