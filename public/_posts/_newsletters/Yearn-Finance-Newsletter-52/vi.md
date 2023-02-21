---
layout: post
title: "Yearn Finance Newsletter #52"
categories: [Newsletters]
image:
  src: ./cover.jpeg
  width: 1152
  height: 576
author: Yearn
date: '2022-01-02'
translator: 🤖💵💵💰💰.eth
---

# Bản tin Yearn.Finance Số #52

### Tuần Kết thúc Ngày 02/01/2022

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/cover.jpeg?w=880&h=440)

Chào mừng các bạn đến với Bản tin Yearn.Finance Số #52! Chúng tôi hy vọng sẽ truyền tải được những dữ kiện mới nhất cho cộng đồng tiền mã thuật số (`crypto`) nói chung lẫn cộng đồng Yearn nói riêng; từ phát hành sản phẩm, thay đổi trong quản trị đến nhiều dự án đối tác trực thuộc hệ sinh thái Yearn. Nếu quan tâm và muốn biết thêm chi tiết về Yearn.Finance, hãy theo dõi tài khoản [Twitter](https://twitter.com/iearnfinance), [Medium](https://medium.com/iearn) cũng như [blog Tiếng Việt](https://vietnamese.blog.yearn.finance/) chính thức của chúng tôi.

## Tóm tắt

- YIP-65 Vào Giai đoạn Biểu quyết

- [Đề xuất] Mean - Thí điểm Chương trình Mua lại DCA

- Suy ngẫm về Yearn

- Yearn Đã Được Khuyến khích 1&nbsp;Triệu&nbsp;FTM từ Fantom Foundation

- Các Kho bạc (`Vault`) tại Yearn

- Tin tức trong Hệ Sinh thái

## YIP-65 Vào Giai đoạn Biểu quyết

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image2.jpg?w=980&h=871)

Nhìn chung, YIP-65 tìm cách phát triển vai trò của YFI trong Yearn qua bốn pha riêng, củng cố tầm nhìn xa của tôken làm nền tảng quản trị cơ bản.

Để làm điều đó, một phần YFI mà Ngân khố (`Treasury`) mua lại theo chương trình [BABY](https://yips.yearn.finance/YIPS/yip-56) sẽ được dành trao thưởng cho những ai nắm giữ tôken YFI và tích cực tham gia Quản trị Yearn.

Sau đó, vai trò của YFI trong Quản trị Yearn sẽ được phát triển qua bốn thành phần riêng.

1: xYFI. Phân bổ YFI đã mua lại bằng Ngân khố (`Treasury`) làm phần thưởng cho một kho bạc YFI.

2: Bỏ phiếu khóa-giam YFI. Áp dụng kiểu bỏ phiếu khóa-giam YFI (veYFI) tối đa bốn năm (thời lượng chính xác sẽ được xác định sau), với việc khóa càng lâu sẽ đem lại quyền biểu quyết và phần thưởng YFI càng lớn. Người dùng có thể thoát sớm khỏi vị trí khóa bằng cách trả một khoản phí cho những chủ tôken vẫn đang khóa.

3: Tỷ xích Kho bạc + Biểu quyết. Áp dụng Tỷ xích Kho bạc, theo đó người dùng ký gửi tôken `yVault` của mình vào một "thang đo", thu về phần thưởng YFI, được kích thưởng thêm tùy thuộc số lượng veYFI mà bản thân đã cọc. YFI phân bổ vào tỷ xích dựa theo biểu quyết quản trị hàng tuần.

4: Tính năng "Đóng góp hữu ích". Gia tăng trách nhiệm và nghĩa vụ cho "cử tri" veYFI cũng như YFI được khóa của họ, đổi lại bằng phần thưởng lớn hơn từ giao thức. Đây là thiết kế kho bạc v3 đang chờ hoạch định cụ thể và phê duyệt.

Tiếp theo, thẩm quyền thực hiện sẽ được trao cho cho Ê-kíp Lập trình Yearn, tùy theo quyết định của họ khi khả thi.

Cuối cùng, YFI có thể biểu quyết Quản trị Yearn sẽ trở thành đặc quyền của riêng những ai đặt cọc trong xYFI (từ Pha 1 trở đi) hoặc bỏ phiếu khóa-giam trong Yearn (từ Pha 2 trở đi).

Đọc thêm về đề xuất nâng cấp mô hình kinh tế tôken và các lợi ích [tại đây](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994), rồi biểu quyết trên Snapshot [ở liên kết này](https://snapshot.org/#/ybaby.eth/proposal/0x8f7417fa5565d9f46e16618503e8808c36d51b2a9e8217a68c632d7c090d69d9).

Đặc biệt cảm ơn các tác giả: @0xJiji, @banteg, daryllautk, HAtTip3675, @onlylarping, @vany365 và @Wot_Is_Goin_On đã soạn thảo đề xuất quan trọng này.

## [Đề xuất] Mean - Thí điểm Chương trình Mua lại DCA

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image3.jpg?w=690&h=301)

Mục tiêu của chương trình thí điểm này nhằm chứng tỏ việc Trung bình hóa Chi phí Đầu tư (`Dollar-Cost Average` hay DCA) là phương án mua lại hiệu quả hơn cho Ngân khố (`Treasury`).

Ê-kíp Yearn, dựa trên cơ sở biểu quyết Snapshot đã được thông qua, sẽ dành ra số ETH trị giá 1&nbsp;Triệu&nbsp;$ (249.376559 ETH @ $4010/ETH) cho chương trình mua lại này và khởi tạo vị trí tài chính YFI-ETH trong 30 ngày với tỷ lệ 8.31255197 ETH từng hôm.

Ê-kíp Mean hy vọng sẽ tạo được ít nhất một hiệu ứng vang dội trong cộng đồng và ban lãnh đạo của ĐAO.

Đọc thêm về đề xuất trên [tại đây](https://gov.yearn.finance/t/proposal-mean-dca-buyback-pilot-program/12065).

## Suy ngẫm về Yearn

2022 đã đến, giờ là lúc nhìn lại các "ván cược" về ĐeFi của bạn. Đây là tóm tắt ngắn gọn vì sao Yearn khác biệt so với phần còn lại.

Với việc Yearn thường gắn với nhãn hiệu "tổ hợp lãi suất”, nhiều người hay mường tượng ra một ê-kíp làm việc với mục tiêu duy nhất là "gặt hoa lợi". Lệch lạc hơn, nhiều lúc Yearn còn bị xem nhẹ như "nông dân" chỉ ngồi "cày" CRV. Đó chắc chắn không phải cách hiểu đúng về Yearn.

Hiện tại, nhiều hạn chế còn tồn đọng như chỉ một nhóm nhỏ lập trình viên đủ khả năng xây dựng chiến lược, phí gas cao không cho phép vài chiến lược nhất định, thiếu số lượng giao thức đủ an toàn để áp dụng chiến lược, cũng như ít cách tự động hóa các tác vụ.

Thay vì chờ khó khăn giảm bớt (một phần đã rồi với việc "nhập môn" nhiều chiến lược gia hơn, mở rộng sang các chuỗi khối và Lớp-2 khác có phí gas thấp), Yearn âm thầm xây dựng cơ sở hạ tầng nhằm tối ưu hóa tương tác giữa những giao thức, chiến lược gia cũng như nguồn vốn ở quy mô lớn.

Yearn đã và đang chế tạo ra cỗ máy sản xuất được cỗ máy tổ hợp lãi suất (như kiểu diễn đạt của Chú Elon Musk), sẵn sàng cho một thế giới ngày càng nhiều tôken, giao thức phức tạp, chuỗi khối, chiến lược gia, công cụ cũng như nguồn vốn.

Với 7&nbsp;tỷ&nbsp;$ các vụ "hack" ĐeFi trong năm 2021, trọng tâm chính luôn là bảo đảm an toàn. Hầu hết các giao thức ĐeFi hạn chế rủi ro tài chính bằng cách điều chỉnh thông số (ví dụ: Nền tảng cho vay giảm giá trị vay-trên-thế-chấp đối với tài sản nhiều rủi ro hơn), cũng như tối thiểu hóa rủi ro công nghệ bằng cách tập trung vào một thứ (chẳng hạn như chỉ cho vay).

Yearn làm ĐeFi ở cấp độ khó vì kết hợp nhiều giao thức và chiến lược nội trong một kho bạc (`vault`) duy nhất. Các giao thức khác hay tự hào về số lượng kiểm chứng an toàn (`audit`) đã đạt được. "Học viện" yAcademy của Yearn đang đào tạo thế hệ kiểm toán viên tiếp theo - giúp đẩy nhanh tiến độ phê duyệt chiến lược mới.

Ưu tiên tiếp theo là hiệu quả vốn – tìm ra cách điều phối tiền trong kho bạc khắp nhiều giao thức cho vay, cấp thanh khoản (`liquidity providing`), cơ hội "cày" với đòn bẩy tài chính và những chiến lược khác để tối ưu hóa lợi nhuận mà đỡ rủi ro nhất. Rồi đến công đoạn tự động hóa chúng.

Một phần lý do đằng sau sự "phát hành công bằng" của YFI bắt nguồn từ nhận thức, hay sự thật phũ phàng: Thu về lợi tức cao nhưng ít rủi ro cho hàng nghìn tỷ đô-la ở thế giới Tài chính Cũ (TradFi) là công việc vô cùng quá sức cho một ê-kíp. "Trường nội trú" YFI giờ đây đang đào tạo những chiến lược gia "lần đầu".

Yêu cầu về mở rộng quy mô đòi hỏi giảm thiểu các quy trình thủ công - mua lại, thu hoạch, đổi tỷ trọng chiến lược, phòng hộ rủi ro sau biến động giá. Andre không phải chỉ ngẫu hứng tạo ra 

Keep3r. Thậm chí, chúng tôi còn có cả một nhóm phân tích dữ liệu đang nghiên cứu thời điểm tối ưu để mua lại.

Phối hợp giữa môi trường phi tập trung, phân quyền – Xây dựng hệ thống như thế nào để khuyến khích nhiều người chưa bao giờ gặp mặt cùng bắt tay hiện thực hóa tất cả những thứ trên? Coordinape đã rất hữu ích - công cụ này bắt nguồn từ một ê-kíp Yearn khi gặp phải vấn đề này lần đầu -  giờ đây đang được sử dụng bởi vô số tổ chức ĐAO.

Mỗi giao thức ĐeFi mới đem lại cơ hội tiềm tàng cho chiến lược gia. Chiến lược mới làm tăng hoa lợi mà đỡ rủi ro cho các kho bạc, từ đó khuyến khích nhiều vốn ký gửi hơn, mang lại thêm phí sử dụng để tiếp tục xây dựng nền tảng khổng lồ này.

Các ví dụ trên cho thấy cách Yearn tiến hành giải quyết nhiều vấn đề chung trong ĐeFi. Thuật ngữ "giao thức ĐeFi" dường như không còn đủ sức mô tả nữa, có lẽ "tổ chức công nghệ tài chính tự-trị phi-tập-trung" hay "fintech ĐAO" sẽ đúng hơn khi nói đến Yearn.

Cảm ơn Wot_Is_Goin_On về bài viết tuyệt vời này, liên kết gốc [tại đây](https://twitter.com/Wot_Is_Goin_On/status/1477277152336916484).

## Yearn Đã Được Khuyến khích 1&nbsp;Triệu&nbsp;FTM từ Fantom Foundation

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image4.jpg?w=1100&h=1092)

Yearn Đã Được Khuyến khích 1&nbsp;Triệu&nbsp;FTM từ Fantom Foundation

Chúng tôi không bán phá giá hay xả hết, hơn 90% được đóng góp cho kho bạc FTM. Những kho bạc khác được nhận khoản đóng góp tỷ lệ tương ứng và ngay lập tức tăng 1% giá trị.

Khoản trợ cấp này chỉ là khởi đầu, chúng tôi sẽ tiếp tục gặt hái nhiều hơn khi đạt mục tiêu về Tổng Giá trị Ký gửi (TVL).

## Các Kho bạc (`Vault`) tại Yearn

Bạn có thể đọc mô tả chi tiết các chiến lược của mọi yVault đang hoạt động [tại đây](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Tin tức trong Hệ Sinh thái

[Xem ngay bảng tổng quan `Smart Savings` mới của DeFi Saver, có luôn Yearn](https://twitter.com/DeFiSaver/status/1476614075815809028?s=20)

[Xem áo hoodie Yearn 2021 cho đóng góp viên do loldefi làm ra](https://twitter.com/loldefi/status/1477062572595884032)

[Yearn tiếp tục mua lại yvBOOST](https://twitter.com/wavey0x/status/1474946151006842884)

[Đọc phân tích về lót tay $CRV bao gồm cả yvBOOST](https://twitter.com/0xSEM/status/1475284063204388867)
