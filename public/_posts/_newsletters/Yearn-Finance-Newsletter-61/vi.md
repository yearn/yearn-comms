---
layout: post
title: "Bản tin Yearn Finance #61"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 1000
  height: 500
author: Yearn
date: '2022-04-25'
translator: 🤖💵💵💰💰.eth
---

### Tuần Kết thúc Ngày 25/04/2022

![](./cover.jpg?w=1000&h=500)

Chào mừng các bạn đến với Bản tin Yearn.Finance Số #61! Chúng tôi hy vọng sẽ truyền tải được những dữ kiện mới nhất cho cộng đồng tiền mã thuật số (`crypto`) nói chung lẫn cộng đồng Yearn nói riêng; từ phát hành sản phẩm, thay đổi trong quản trị đến nhiều dự án đối tác trực thuộc hệ sinh thái Yearn. Nếu quan tâm và muốn biết thêm chi tiết về Yearn.Finance, hãy theo dõi tài khoản [Twitter](https://twitter.com/iearnfinance), [Medium](https://medium.com/iearn) cũng như [blog Tiếng Việt](https://blog.yearn.finance/vi/) chính thức của chúng tôi.

## Tóm tắt

- Trang Web Yearn Mới
- Loạt Súng Mới trong Cuộc Chiến Curve
- Hiểu rõ Quản trị Yearn
- Gương mặt Yearn: RestlessMik3
- Yearn Finance Tài trợ Cuộc thi Hackathon ETHAmsterdam 2022
- Các Kho bạc (`Vault`) tại Yearn
- Tin tức trong Hệ Sinh thái

## Trang Web Yearn Mới

![](./image2.jpg?w=900&h=458)

Chúng tôi đã phát hành bản cập nhật mới cho trang web của mình, và như mọi khi, cải thiện trải nghiệm người dùng là ưu tiên cao nhất. Các thành viên ê-kíp thiết kế ở Yearn đã làm việc chăm chỉ để tạo lập và cho ra mắt phiên bản UI mới này. Chúng tôi có phúc khi được bắt tay với những chuyên gia thiết kế tài năng và tâm huyết nhất thế giới tiền mã thuật số (`crypto`). Bạn có thể truy cập trang mới tại [yearn.finance](https://yearn.finance/#/portfolio).

Chúng tôi mời bạn tham gia, góp ý cùng cộng đồng Yearn qua [Discord](https://discord.gg/8rF374XkXy), [Twitter](https://twitter.com/iearnfinance) hay [Github](http://github.com/yearn). Đến đây xây dựng với chúng tôi!

## Loạt Súng Mới trong Cuộc Chiến Curve

![](./image3.jpg?w=900&h=506)

Inverse Finance, một giao thức ĐeFi nhắm mục tiêu trở thành ngân hàng trung ương và là đối tác với Yearn, đã tìm đến chúng tôi để tăng trưởng thật mạnh tính thanh khoản cho dự án tiền bình giá (`stable coin`) có tên DOLA của họ.

Với sự trợ giúp gồm 9.7 triệu tôken veCRV của mình, chúng tôi cam kết 10% để biểu quyết điều hướng khoản thưởng vào cặp DOLA/3CRV tại [Curve Finance](https://curve.fi/). Đổi lại, Inverse triển khai tôken DOLA vào một kho bạc Yearn chuyên biệt qua chương trình `Fed program` của họ. Đối với Yearn, điều này mang lại lợi nhuận tốt hơn cách lót tay (`bribe`) thường thấy vì tất cả phí giao dịch bán-đổi (`swap`), phần thưởng CRV và CVX đều thuộc về chúng tôi.

Đọc toàn bộ bài viết trên medium [tại đây](https://medium.com/inverse-finance/a-new-salvo-in-the-curve-wars-c2badffa0123), cũng như hướng dẫn "canh tác" DOLA [ở liên kết này](https://medium.com/inverse-finance/how-to-farm-dola-incentives-today-using-curve-yearn-2a150a2b3afb).

Nếu giao thức của bạn hứng thú với việc hợp tác cùng Yearn để thu lợi và phí giao dịch như Inverse, hãy tìm hiểu chi tiết [tại đây](https://twitter.com/iearnfinance/status/1367508483952771075) và đăng ký [ở liên kết này](https://yearnfinance.typeform.com/to/uP7xOJUN).

## Hiểu rõ Quản trị Yearn

![](./image4.jpg?w=900&h=482)

Bất cứ ai cũng có thể thảo luận hoặc đề xuất ý kiến tại [Discord](https://discord.com/invite/6PNv2nF), [Twitter](https://twitter.com/iearnfinance), [Reddit](https://www.reddit.com/r/yearn_finance), [Bể Ý tưởng](https://yearnfinance.notion.site/yearnfinance/Pool-of-Ideas-d75383ade9154d8bb6163388c6c2b39b), [Telegram](https://t.me/yearnfinance/) và [Diễn đàn Quản trị](https://gov.yearn.finance/) của Yearn. Khi đề xuất hoàn thiện, nó bước vào giai đoạn biểu quyết có cấu trúc tại [Trang Snapshot](https://yearn.snapshot.page/#/) nơi [tôken YFI](https://www.coingecko.com/en/coins/yearn-finance) được dùng làm quyền bỏ phiếu.

Loại đề xuất phổ biến nhất trên diễn đàn là "Đề xuất Cải thiện Yearn" (YIP), nhưng có nhiều loại khác được liệt kê trong mô hình quản trị hiện tại của Yearn (YIP-61). "Đề xuất Cải thiện Yearn" (YIP): Một đề xuất để thực hiện dựa theo bất cứ quyền nào mà chủ đồng YFI có, hay thậm chí cả những quyền bên ngoài phạm vi được liệt kê. "Đề xuất Ủy quyền Yearn" (YDP): Đề xuất cho phép chủ tôken thay đổi bất cứ quyền quyết-định-riêng nào được ủy thác cho một yTeam. Và cuối cùng, Đề xuất Thăm dò Yearn (YSP): Một đề xuất không-bắt-buộc phải thực hiện, nhằm thăm dò ý kiến của cộng đồng hoặc ra hiệu phương án giải quyết bất cứ vấn đề nào.

Nắm giữ YFI giúp chủ sở hữu có khả năng kiểm soát cách phân phối quyền lực giữa các ê-kíp, cũng như độc quyền biểu quyết thông qua hay bác bỏ bất cứ điều chỉnh nào về quyền lực nội bộ giao thức như: Thay đổi Người ký của Ví chung (`Multisig`) hay yTeam, phê chuẩn yTeam, chi tiêu Quỹ Ngân khố (`Treasury`), áp Phí Giao thức và thay đổi hợp đồng (`contract`) YFI.

Nắm giữ hay "cọc" YFI ở những nơi sau đều cho phép bạn biểu quyết: Ví riêng của mình, kho bạc YFI V2 (tương đương với việc nắm giữ tôken yvYFI), tôken cấp thanh khoản (LP) YFI/WETH tại Balancer, tôken cấp thanh khoản (LP) YFI/WETH tại Uniswap, tôken cấp thanh khoản (LP) YFI/WETH tại Sushiswap cọc trong hợp đồng (`contract`) MasterChef, thế chấp YFI ở MakerDAO, thế chấp YFI ở Unit Protocol, cũng như Bancor.

Tóm lại, quản trị gồm ba bước đơn giản: Thảo luận trên diễn đàn, biểu quyết tại Snapshot, và hiện thực hóa.

Click [vào đây](https://medium.com/iearn/yearn-governance-explained-proposals-yfi-token-and-execution-113ec86c3a3f) để tìm hiểu thêm về quản trị Yearn cùng đóng góp viên MarcoWorms.

## Gương mặt Yearn: RestlessMik3

![](./image5.jpg?w=400&h=294)

RestlessMik3 là một đóng góp viên của Yearn giúp chuyển ngữ nhiều nội dung sang tiếng Tây Ban Nha, cũng như thực hiện công tác tiếp nhận người mới. Đóng góp viên Yearn thường được tán dương nhờ đạo đức nghề nghiệp cao, thân thiện, cũng như sự chủ động trong việc thấy cách mới để giúp Yearn.

Tại Yearn, Mik3 thường dành thời gian trong ngày để kiểm tra Telegram của mình nhằm cập nhật tin tức Yearn, dịch thuật, liên lạc với đóng góp viên mới, cũng như tham dự các buổi họp và nhiều hoạt động khác ở Yearn. Mik3 cảm nhận cộng đồng quốc tế làm việc ở Yearn rất ấn tượng và hy vọng tạo ra ảnh hưởng lâu dài cho thế giới tiền mã thuật số bằng cách đóng vai trò người dẫn đường khi ĐeFi phổ cập đại chúng.

Như đã nói, Yearn thúc đẩy một văn hóa thoải mái, giúp mọi người bất kể xuất thân có thể phát triển thành công, và Mik3 nhận ra rằng chúng tôi thực sự khuyến khích đóng góp viên làm những gì họ tin vào.

Xem [toàn bộ bài phỏng vấn](https://medium.com/iearn/people-of-yearn-restlessmik3-d487b15ce051) từ Defiglenn–một đóng góp viên khác của Yearn.

## Yearn Finance Tài trợ Cuộc thi Hackathon ETHAmsterdam 2022

![](./image6.jpg?w=900&h=450)

Yearn Finance hân hạnh tài trợ Cuộc thi Hackathon ETHAmsterdam 2022. Chúng tôi đã có một cuối tuần tuyệt vời, đầy cơ hội xây dựng dựa trên Yearn ở một trong những thành phố sôi động nhất thế giới. Do ETHGlobal tổ chức, ETHAmsterdam quy tụ hàng trăm kỹ sư và nhà phát minh của web3 để cùng xây dựng, học hỏi cũng như tranh tài đoạt nhiều giải thưởng tổng trị giá hơn 400&nbsp;000&nbsp;$!

Chúng tôi đã trao hai giải thưởng trị giá 2000&nbsp;$ cho Dự án Tốt nhất Xây dựng Với Yearn. Các dự án dự thi được đánh giá dựa trên tiêu chí: Tận dụng Yearn, tính độc đáo/sáng tạo, cũng như năng lực kỹ thuật (mã lập trình tổ chức và viết tốt). Xin chúc mừng VeriFried-Strategy và Archimedes đã đoạt giải. VeriFried Strategy tạo một cơ sở hạ tầng phi tập trung giúp các thương gia thử nghiệm ngược (`backtest`) và triển khai chiến lược của mình trong môi trường phi tập trung, không-giữ-hộ. Archimedes là một chiến lược Gearbox tôken hóa với ERC-4626 nhằm làm đơn giản việc truy cập những chiến lược đòn bẩy tài chính cao. Người dùng thông thường và cơ quan tổ chức tài chính có thể tiếp cận các chiến lược phòng hộ rủi ro bằng một giao dịch duy nhất.

Để xây dựng ở Yearn, chúng tôi khuyên bạn nên bắt đầu bằng cách đọc [tài liệu cho nhà phát triển](https://docs.yearn.finance/). Chúng sẽ chỉ rõ mọi thứ cần làm, từ thiết lập máy tính, bắt đầu xây dựng kho bạc, chiến lược, cũng như cách sử dụng hệ thống kỹ thuật Yearn và SDK (bộ công cụ phát triển phần mềm) để kết–tổng hợp nguồn dữ liệu. Nó dễ hơn bạn tưởng nhiều! Xây dựng cái gì đây? Chúng tôi khuyên bạn xem qua các liên kết sau làm nguồn cảm hứng: [Xây dựng với yVault](https://medium.com/iearn/yearn-partners-building-with-yvaults-4cd042ea092), [Trở thành một Chiến lược gia](https://www.youtube.com/watch?v=NVR3teJw0Y0), [Những Dự án dự thi từ Hackathon trước](https://dorahacks.io/hackathon/ethdenver22virtual/?bounty=Yearn%20Finance), và [Giới thiệu Kho bạc Yearn](https://www.youtube.com/watch?v=a1TsO62402c). Có thắc mắc hay cần giúp đỡ? Gia nhập ngay [Máy chủ Discord](https://discord.com/invite/yearn) để được hỗ trợ 1x1 từ ê-kíp chúng tôi.

Chân thành cảm ơn tất cả những "hacker" đã tham gia ở cuối tuần này, cũng như phía tổ chức sự kiện. Đang tích cực xây dựng một sản phẩm hay chiến lược trong ĐeFi? Hãy cân nhắc đăng ký [tại đây](https://yearnfinance.notion.site/Welcome-to-Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249) để giành trợ cấp hoặc tiền thưởng từ Yearn.

Bạn có thể xem thêm chi tiết về Yearn tại ETHAmsterdam [ở liên kết này](https://medium.com/iearn/yearn-finance-is-sponsoring-the-ethamsterdam-2022-hackathon-a9110e906424).

## Các Kho bạc (`Vault`) tại Yearn

Bạn có thể đọc mô tả chi tiết các chiến lược của mọi yVault đang hoạt động [tại đây](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Tin tức trong Hệ Sinh thái

[Yearn đã được bao gồm trong một cuộc biểu quyết Snapshot Arbitrum Odyssey](https://twitter.com/iearnfinance/status/1513921428516605954)

[Bình chọn cho kho bạc rstETHwstETH ở cuộc thăm dò ý kiến L2 mới của Argent](https://twitter.com/argentHQ/status/1514172474044432387)

[Xem trang "Viên Thuốc Xanh" (`Blue Pill`) mới](https://twitter.com/iearnfinance/status/1518390663355768833)

[Lãi suất tiền bình giá (`stable coin`) tốt nhất hiện tại là kho bạc DOLA tại Yearn](https://twitter.com/joinwido/status/1517174426684567555)

[Xem bản tin tổng hợp ngắn của Yearn tại ETHAmsterdam](https://twitter.com/YFI_interns/status/1517710156594917377)

[Tổng hợp phân tích dữ liệu mới của Yearn tại Dune Analytics](https://twitter.com/iearnfinance/status/1517213158968111106)
