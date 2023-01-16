---
layout: post
title: "Bản tin Yearn Finance #59"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1000
  height: 500
author: Yearn
date: '2022-04-06'
translator: 🤖💵💵💰💰.eth
---

### Tuần Kết thúc Ngày 05/04/2022

![](./cover.png?w=1000&h=500)

Chào mừng các bạn đến với Bản tin Yearn.Finance Số #59! Chúng tôi hy vọng sẽ truyền tải được những dữ kiện mới nhất cho cộng đồng tiền mã thuật số (`crypto`) nói chung lẫn cộng đồng Yearn nói riêng; từ phát hành sản phẩm, thay đổi trong quản trị đến nhiều dự án đối tác trực thuộc hệ sinh thái Yearn. Nếu quan tâm và muốn biết thêm chi tiết về Yearn.Finance, hãy theo dõi tài khoản [Twitter](https://twitter.com/iearnfinance), [Medium](https://medium.com/iearn) cũng như [blog Tiếng Việt](https://blog.yearn.finance/vi/) chính thức của chúng tôi.

## Tóm tắt

- Ra mắt Kho bạc Mới nhất & Mạnh mẽ nhất của Chúng tôi
- Bàn về các Chiến lược với Facu ở ETHDubai
- Tham gia Yearn ĐAO: Nhập môn
- Yearn Dùng Tenderly Như thế nào
- Đóng góp viên Yearn
- "Trường nội trú" YFI
- Các Kho bạc (`Vault`) tại Yearn
- Tin tức trong Hệ Sinh thái

# Ra mắt Kho bạc Mới nhất & Mạnh mẽ nhất của Chúng tôi

![](./image2.png?w=900&h=473)

Kho bạc Bể Curve Rocket mới nhất của chúng tôi đã chính thức phát hành. Bạn có thể kiếm phần thưởng "cọc" (`stake`) ETH ở 2 bên bể tương ứng trên Curve Finance với Rocket Pool ETH (rETH) và Lido stETH (wstETH). Do cả hai bên của bể đều là tôken cọc ETH "lỏng" (dễ thanh khoản), bạn sẽ kiếm được phần thưởng cọc ETH, $CRV cũng như phí giao dịch ở Curve. Yearn sẽ tự động thu hoạch và tái ký gửi phần thưởng CRV cũng như CVX vào kho bạc để tăng thêm hoa lợi cho bạn.

Sử dụng `Yearn Zaps` để ký gửi bất kỳ tôken lớn nào ($ETH, $USDC, v.v...) vào kho bạc này. Zaps sẽ tự động quy đổi lượng ký gửi của bạn thành rETH+wstETH, cấp vào bể thanh khoản tương ứng trên Curve rồi cọc nó ở Yearn trong một giao dịch duy nhất.

Hoặc bạn có thể vào Bể Curve Rocket thủ công bằng cách ký gửi Rocket Pool ETH (rETH) + Lido stETH (wstETH) ở Curve hoặc tôken LP rETH+wstETH của mình vào Yearn.

Bắt đầu ngay tại [https://yearn.finance/#/vaults](https://yearn.finance/#/vaults)

# Bàn về các Chiến lược với Facu ở ETHDubai

![](./image3.jpg?w=1024&h=512)

Ở sự kiện ETHDubai gầy đây, saltyfacu–đóng góp viên Yearn–đã thuyết trình tổng quan về bản chất của các chiến lược, giá trị kinh doanh cốt lõi của Yearn.

saltyfacu bàn về mối liên hệ giữa các Kho bạc–vốn là định dạng tôken ERC-20 phổ biến viết bằng ngôn ngữ lập trình Vyper–và Chiến lược, phần kế toán của Yearn viết theo Solidity. Các Chiến lược cáng đáng mọi công tác nặng nhọc cho hệ sinh thái Yearn, chẳng hạn như yvUSDC là kho bạc sử dụng tới 20 chiến lược.

Mỗi Chiến lược thực hiện một quy tắc phân bổ tiền khác nhau và có thể áp dụng cho Kho bạc mà không nhất thiết phải dùng vốn ngay. Độ thuận tiện ở đây là việc người dùng tương tác với tôken kho bạc, vốn có nhiều chiến lược ngầm để tương tác với những giao thức và sàn giao dịch phi tập trung (`DEX`) khác.

Để viết một chiến lược, bạn sẽ cần git, eth-brownie, ganache, kho mã lập trình brownie-strategy-mix, và mã VS. Về mặt kinh nghiệm, bạn sẽ cần kiến thức lập trình, đã hoàn tất CryptoZombies cấp 4 trở lên, hiểu cách các giao thức ĐeFi tương tác, cũng như rất nhiều quyết tâm.

Hoàn tất và ra mắt chiến lược cần sáu bước: Thẩm định, viết mã, bình duyệt, thử nghiệm (bằng kho bạc `ape tax`), đánh giá bởi "Ủy ban Canh tác An toàn"/ê-kíp lập trình chủ chốt, rồi chính thức phát hành. Sau các bước trên, bạn cần phải chăm lo và theo dõi chiến lược để đảm bảo mọi thứ hoạt động như đã định.

Xem toàn bộ nội dung [tại đây](https://youtu.be/ooYgIMlqITQ?t=21266), bắt đầu từ mốc 5:54:26.

Chúng tôi mời bạn tham gia, góp ý cùng cộng đồng Yearn qua [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) hay [Github](http://github.com/yearn). Đến đây xây dựng với chúng tôi!

# Tham gia Yearn ĐAO: Nhập môn

![](./image4.png?w=1024&h=768)

Trong bài này, Cryptouf và Farrahmay giới thiệu sơ về quá trình tiếp nhận người mới gia nhập một ĐAO, mà cụ thể là Yearn. Dưới đây là tóm tắt.

Đóng góp viên mới nên lưu ý gì khi quyết định gia nhập một ĐAO? Họ sẽ cần phải tìm hiểu kỹ về ĐAO đó cũng như nguyên tắc đạo lý chung.

Với rất nhiều người "chân ướt chân ráo" tiếp cận web3 mỗi ngày, chắc chắn số lượng đóng góp viên mới không kể xiết khắp các kênh Discord, Telegram và Twitter. Yearn làm gì để hướng đóng góp viên đến sự thành công? Chúng tôi nhận thấy điều quan trọng là phải nói rõ sứ mệnh và mục tiêu của mình, hy vọng điều này sẽ thu hút đúng người đóng góp cho Yearn.

Quá trình tiếp nhận có thể khác nhau cho từng ĐAO. Làm sao để hoạch định quá trình tiếp nhận vào ĐAO? Yearn có kế hoạch nhập môn chính thức nào cho đóng góp viên mới không? Quá trình tiếp nhận của chúng tôi gồm 4 C – `Compliance` (thỏa thuận), `Clarification` (làm rõ), `Culture` (văn hóa) và `Connection` (kết nối).

Đóng góp viên nên làm gì để đảm bảo mình thành công khi gia nhập một ĐAO? Mỗi người gia nhập ĐAO sẽ có mức độ hiểu biết và quen thuộc khác nhau về Web3, ĐeFi, kỹ thuật công nghệ hay ĐAO. Để cống hiến thành công cho một ĐAO, điều kiện đầu tiên là chủ động, không sợ nói lên ý kiến và hỏi khi có thắc mắc.

Làn sóng đóng góp viên đầu tiên gia nhập ĐAO ít quan tâm đến đãi ngộ hơn, nhưng rất quan trọng việc xây dựng khuôn khổ và nền tảng của nó. Với những làn sóng mới sau này, đãi ngộ là yếu tố cốt yếu để đảm bảo cá nhân thấy mình được tưởng thưởng xứng đáng và có thể dồn hết tâm huyết khi cần, giúp ĐAO phát triển lâu dài. Yearn sử dụng Coordinape để tưởng thưởng cho đóng góp của thành viên. Thêm chi tiết về cách Yearn Finance sử dụng Coordinape cũng như ưu/nhược của công cụ này? Coordinape là một công cụ dành cho ĐAO để khuyến khích, tưởng thưởng và tận dụng các đóng góp viên trong cộng đồng mình.

Coordinape có chức năng cam đoan, từ đó giúp mọi thành viên có khả năng bổ sung thêm người đáng tin cậy. Chức năng này rất tuyệt vời cho lý tưởng phi tập trung, nhưng vấn đề nảy sinh khi số thành viên tăng lên. Nó có thể bị lợi dụng để đưa thêm bạn bè vào. Yearn đang làm gì để tránh điều này? Một số thành viên có thể cống hiến trong nhiều tháng, sau đó rời khỏi ĐAO hoặc ít hoạt động hơn (vì lý do gì không quan trọng!). Ở một thế giới lý tưởng, các thành viên nên báo cáo rõ điều này với những người khác để nhận ít phần thưởng hơn, hay thậm chí chọn không tham gia nhận thưởng nữa nếu bận chưa đóng góp được. Nhưng thực tế có diễn ra như vậy? Công cụ nào cũng có thể có lỗ hổng và bị trục lợi, Coordinape không phải ngoại lệ.

Xem toàn bộ nội dung [tại đây](https://mirror.xyz/cryptouf.eth/WRXKCZmEQvh1kqcn4U4HnY-BjDZQGAEjr1yyAOnHngc). Đặc biệt cảm ơn tác giả Cryptouf và Farrahmay–đóng góp viên của Yearn–đã chia sẻ.

# Yearn Dùng Tenderly Như thế nào

![](./image5.png?w=1200&h=675)

Sinh viên luật chơi Adderall. Thì chiến lược gia Yearn có Tenderly. Với các công cụ giám sát, cảnh báo, tìm lỗi và phân tích sự cố, Tenderly biến những người dùng ĐeFi trình độ cao ở bất cứ đâu cũng thành siêu nhân.

Nhưng nó rất đơn giản, ai cũng có thể sử dụng. Trong bài viết mới đây, MarcoWorms–đóng góp viên của Yearn–hướng dẫn cách tạo cảnh báo qua Telegram cho bất cứ hoạt động trực-chuỗi (`on-chain`) nào dọc khắp mọi chuỗi khối EVM lớn nhất. Không cần biết viết một dòng lập trình nào.

Click [vào đây](https://medium.com/iearn/setup-notifications-for-blockchain-transactions-with-tenderly-407a3df6e1ba) để xem một ví dụ thực tiễn. Ở đó, Worms cho thấy chi tiết cách tạo rô-bốt Telegram để theo dõi hoạt động ký gửi cũng như rút tiền khỏi kho bạc (`yVault`) $SPELL và cảnh báo bạn khi các giao dịch đó diễn ra.

Tất cả tùy thuộc vào bạn ở quyết định tiếp theo.

# Đóng góp viên Yearn

![](./image6.jpg?w=800&h=510)

Nếu được hỏi Yearn coi trọng đức tính nào nhất, đó là sự sẵn sàng hành động. Nó đã ăn sâu vào văn hóa Yearn đến mức chúng tôi gọi những đóng góp viên tích cực nhất của mình là *"Doers"*. Đó vừa là danh từ, vừa là ký hiệu mô tả, nhưng trên hết... đó là lời nhắc để hành động.

Là một tổ chức phi tập trung, Yearn ĐAO không có sếp, không quy định ăn mặc, không đường thăng tiến hay đi chơi gôn với CEO. Yearn chỉ có đóng góp viên. Như bất cứ ĐAO nào, có rất nhiều mức độ tham gia.

Mức đầu tiên gồm có người dùng, chủ sở hữu tôken, những ai tham gia biểu quyết và nhà đầu tư. Ở một lớp sâu hơn là đóng góp viên – bất cứ ai trên thế giới tích cực dành thời gian cho một hoặc nhiều dự án của Yearn.

Đóng góp viên cân đều công sức của họ (và được đãi ngộ nếu muốn) qua công cụ điều phối ĐAO mà Yearn sáng tạo: Coordinape. Tại đây, đóng góp viên chia thành các vòng ê-kíp và làm chứng cho công sức của nhau mỗi tháng. Một số người làm cho Yearn một giờ mỗi tuần; số khác nhiều tiếng một ngày. Công việc không bị bàn giao mà được tích cực tìm kiếm. Và cũng không có xi-lô cứng nhắc nào buộc đóng góp viên phải ở lại.

Họ có thể vượt qua mọi lằn ranh để giúp các vòng ê-kíp khác: Từ kỹ thuật đến đồ họa, dịch thuật đến viết chiến lược, soạn thảo nội dung cho tới lên kế hoạch sự kiện. Các đóng góp viên vô cùng phong phú, đến từ mọi khu vực địa lý. Họ là minh chứng tuyệt vời về một tương lai tươi sáng, đoàn kết, không phân biệt, chung một lý tưởng: Đã đến lúc phải có sự thay đổi. Với mỗi đóng góp, sự tin cậy nội trong ĐAO ngày càng lớn giữa từng cá nhân.

Nhiều người trong số họ có việc toàn thời gian ở đâu đó khác. Số khác đóng góp cho nửa tá ĐAO. Nhưng tất cả đều bị thu hút bởi đam mê với những gì Yearn đang xây dựng. Khi đóng góp viên muốn làm tất tay, họ có thể trở thành một "Doer".

Nhưng từ đó chính xác nghĩa là gì? "Doer" đóng góp thường xuyên hơn. Họ giúp lắp ráp mọi phần chuyển động của cỗ máy lớn. Họ không phải công nhân viên. Nhưng họ thực sự thích và chủ động làm, như nghĩa đen của chữ "Doer".

Họ làm những gì Yearn cần để phát triển và đổi mới. Nếu đâm phải tường... Họ đập vỡ chúng. Họ xây dựng những gì kẻ khác chỉ nói mồm. Như tất cả các đóng góp viên khác của Yearn, "Doer" không chấp nhận kiểu hài lòng, ngủ quên trên chiến thắng. Họ là những nhân tố đổi mới. Họ là những người khám phá. Họ là những người luôn tìm kiếm. Họ là kiến trúc sư. Và họ tin rằng bên trong mỗi người chúng ta đều có một "Doer".

Chủ nghĩa công nghiệp và tập đoàn hóa đã làm nhiều thế hệ đui chột ý chí hành động. Chúng bắt ta phải xin phép trước khi làm. Chúng lẫn lộn phân tích với tiến độ. Chúng trả hoa hồng cho bọn tư vấn để phát triển những lộ trình hão huyền. Chúng đánh dấu và đặt cột mốc cho từng xen-ti-mét tiến trình. Chúng muốn biết mỗi phút dành ra phải đem lại lợi nhuận. Thực tế hoàn toàn hợp lý khi các tập đoàn không phải là người phát minh ra chuỗi khối (`blockchain`)

Đóng góp cho Yearn là một sự thách thức. Đó là hành động lấy lại quyền tự chủ. Đó không chỉ là mơ. Đó là Làm

"CODA"

Ở Yearn, cánh cửa luôn mở rộng. Nhưng chỉ chính bạn có thể bước qua.

# "Trường nội trú" YFI

![](./image7.png?w=968&h=625)

"Trường nội trú" YFI là một chương trình cách tân để những chiến lược gia tương lai học và hỏi. Nó không giống trường học ngoài đời, nhưng các chiến lược gia dày dạn sẽ thường xuyên tổ chức giờ hướng dẫn để giúp những tài năng trẻ phát triển.

Để vào "Trường nội trú" YFI, bạn phải: Đi qua quá trình tiếp nhận chung, thể hiện sự quan tâm đối với việc phát triển chiến lược, làm việc cho hoặc tích cực xây dựng một chiến lược, để cuối cùng được mời nhập học.

Bạn cũng có thể tham dự nếu được "giác ngộ" viên thuốc xanh bởi bất cứ cộng tác viên chủ chốt nào của Yearn.

Điều đó nghĩa là gì ư? Bạn sẽ biết khi họ đến tìm.

Đăng ký [tại đây](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda) để có cơ hội nhập học "Trường nội trú" YFI.

# Các Kho bạc (`Vault`) tại Yearn

Bạn có thể đọc mô tả chi tiết các chiến lược của mọi yVault đang hoạt động [tại đây](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Tin tức trong Hệ Sinh thái

[Yearn đã tích hợp Ví Huobi Wallet vào giao diện người dùng (UI) của chúng tôi](https://twitter.com/HuobiWallet/status/1503939305135247365)

[Alchemix, một giao thức được xây dựng dựa trên cơ sở hạ tầng Yearn, gần đây đã phát hành phiên bản V2](https://twitter.com/AlchemixFi/status/1503747272143740942)

[Xem ngay tác phẩm nghệ thuật Yearn mới từ thế giới PILLS Universe](https://twitter.com/pillsuniverse/status/1502662158810759168)

[Steakwallet đem lại một trong những giao diện người dùng (UI) đơn giản nhất để ký gửi vào kho bạc Yearn](https://twitter.com/steakwallet/status/1502018618506293248)

[Sturdy Finance đã nhận fBEETS–cấp lực bởi Yearn–làm tài sản thế chấp mới trên Fantom](https://twitter.com/SturdyFinance/status/1509962174629875726)

[Vén màn thiết kế Yearn v3](https://twitter.com/Wot_Is_Goin_On/status/1504907339182321666)

[Lắng nghe tracheopteryx bàn về ĐAO trên podcast Delphi DISRUPTORS podcast](https://twitter.com/tracheopteryx/status/1511000392552763399)

[Kiếm hoa lợi cố định cao với USDC và DAI tại Tempus Finance, cấp lực bởi Yearn](https://twitter.com/TempusFinance/status/1508823240768167943)

[Một cuộc biểu quyết nhằm đưa yvYFI làm thế chấp cho đồng tiền bình giá (`stable coin`) MAI đã được đề xuất](https://twitter.com/QiDaoProtocol/status/1507430869107150849)

[Giao dịch Yearn miễn phí gas trên Fantom nhờ wido](https://twitter.com/joinwido/status/1506718710836436996)
