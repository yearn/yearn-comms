---
title: "Báo cáo Tài chính Q3-2021 của Yearn Finance"
date: '2022-03-08'
image:
  src: ./cover.jpg
  width: 1500
  height: 500
author: Yearn
translator: 🤖💵💵💰💰.eth
---

![](./cover.jpg?w=1500&h=500)

## Cho Q3–2021

### THÔNG CÁO BẤT NHẬN TRÁCH NHIỆM

> Mọi dữ liệu, mệnh đề và thông tin trong báo cáo này chỉ nhằm mục đích trình bày thông tin, không cấu thành lời tư vấn tài chính hay đầu tư. Hơn nữa, các báo cáo tài chính ở đây chưa được kiểm định toàn diện bởi bởi một tổ chức kiểm toán chuyên nghiệp bên-thứ-ba. Do đó, có thể tồn tại những thiếu sót hoặc lệch lạc về cơ bản làm sai báo cáo tài chính. Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất hay hậu quả tài chính nào có thể xảy ra khi quyết định đầu tư dựa trên dữ liệu trình bày trong nội dung. Thêm vào đó, bằng việc xem báo cáo này, bạn chấp thuận rằng các mệnh đề bên trong không cấu thành sự đại diện, bảo đảm hay bảo lãnh về bất cứ vấn đề gì, cũng như bạn sẽ không dựa vào chúng từ đây về sau và sẽ tiến hành thẩm định của riêng mình. Từ đây, bạn từ bỏ, giải phóng và phủ nhận bất kỳ cùng tất cả mọi khiếu nại, yêu sách hay tranh chấp chống lại Yearn&nbsp;Finance, những cộng tác viên liên can cũng như tác giả của tư liệu này. BÁO CÁO NÀY KHÔNG CẤU THÀNH LỜI TƯ VẤN CHO BẤT CỨ MỤC ĐÍCH NÀO.
>
> Các yếu tố lạc quan trong báo cáo này phụ thuộc vào nhiều giả định, rủi ro và những sự kiện không chắc chắn, thay đổi theo thời gian. Rủi ro không hề ít, từ công nghệ chuỗi khối (`blockchain`) và mã hóa nói chung cho đến Yearn nói riêng, có thể gây ra hậu quả thực tế hoặc khiến quá trình phát triển mà chúng tôi tiên liệu không thành hiện thực, hay ngay cả khi hoàn thành về thực chất cũng không đem lại bất kỳ/tất cả lợi ích hằng mong đợi. Chúng tôi có quyền thay đổi kế hoạch, kỳ vọng và ý định được nêu ở đây vào bất cứ lúc nào. Chúng tôi không có nghĩa vụ phải cập nhật công khai hay sửa đổi mọi phát ngôn lạc quan dù là kết quả từ thông tin mới, thành tựu phát triển trong tương lai hoặc ngược lại. THEO ĐÓ, CHÚNG TÔI KHUYẾN CÁO BẠN KHÔNG TIN VÀO, CŨNG NHƯ KHÔNG RA BẤT CỨ QUYẾT ĐỊNH ĐẦU TƯ HAY TÀI CHÍNH NÀO DỰA TRÊN CÁC GIẢI TRÌNH CÓ TRONG BẢN CẬP NHẬT NÀY—KỂ CẢ CŨNG NHƯ KHÔNG GIỚI HẠN VIỆC BÁN/GIAO DỊCH ĐỒNG YFI, ETHER HOẶC MỌI TÔKEN CHUỖI KHỐI (`BLOCKCHAIN`) KHÁC.

---

## Mục lục

- Giới thiệu về Yearn Finance
- Giải trình Thu nhập (`Income Statement`)
- Mua lại YFI
- Bảng Quyết toán (`Balance Sheet`)
- Tổng Giá trị Ký gửi (`Total Value Locked` hay TVL)
- Bảng đo Tài chính Tương tác
- Nguồn

---

## Giới thiệu về Yearn Finance

![](./image1.jpg?w=1456&h=733)

Yearn Finance (“Yearn”) là giao thức tổng hợp hoa lợi hàng đầu trong lĩnh vực tài chính phi tập trung ("DeFi") hoạt động trên chuỗi khối (`blockchain`) Ethereum. Nó phát hành đầu năm 2020 với sản phẩm iEarn, sử dụng thuật toán để di chuyển tiền bình giá (`stable coin`) như USDC, USDT, DAI giữa nhiều giao thức cho vay trong DeFi nhằm thu được lãi suất tối ưu nhất tại mọi thời điểm. Sản phẩm này còn được biết đến với tên yPool trên Curve&nbsp;Finance. Curve là một sàn giao dịch phi tập trung chú trọng vào tính năng bán-đổi (`swap`) có độ trượt giá thấp giữa hàng loạt loại tiền bình giá (`stable coin`). Tháng 07/2020, tôken YFI được phân phối trong khoảng 10 ngày cho những người dùng cung cấp vốn vào nhiều bể thanh khoản (`liquidity pool`) liên quan tới yPool–một quy trình thường truyền miệng là "canh tác" (`farming`) hay "gặt" hoa lợi (`yield-farming`). Tôken YFI dùng để quản trị giao thức Yearn.

Không lâu sau khi phân phối xong tôken YFI, sản phẩm yVault ra mắt. yVault cho phép người dùng ký gửi vốn vào các hợp đồng thông minh (`smart contract`) để Chiến lược gia –những chuyên gia "gặt" hoa lợi –thay mặt bên gửi tìm kiếm lãi một cách tự động và hiệu quả. Phí Gas được "xã hội hóa" khắp toàn bộ bể góp vốn, mang lại tính kinh tế hơn cho người dùng nhỏ lẻ khi tham gia hoạt động "canh tác". Người dùng bình thường cũng không cần kiến thức chuyên sâu về DeFi, "gặt" hoa lợi hay cấp thanh khoản (`liquidity`), bởi Chiến lược gia sẽ vận dụng mã lập trình hợp đồng thông minh (`smart contract`) thay mặt thực hiện những tác vụ cần thiết. Lợi nhuận từ việc "canh tác" được Chiến lược gia thu hoạch định kỳ và ký gửi tiếp vào kho bạc (`vault`); người gửi có thể lấy những khoản lời này. Sản phẩm yVault đại diện cho mô hình kinh doanh cốt lõi của Yearn, nhưng kể từ đầu năm 2021, Ngân khố Yearn (`Yearn Treasury`) bắt đầu tham gia "gặt" hoa lợi bằng chính những tài sản đang nắm giữ để tạo thêm dòng tiền (`cash flow`) bổ sung.

Yearn đã thực hiện một loạt các quan hệ hợp tác vào mùa thu năm 2020, hình thành Hệ sinh thái Yearn. Chúng bao gồm SushiSwap (Trình tạo Thị trường hay Nhà cái Tự động—`Automated Market Maker`), C.R.E.A.M Finance (vay–mượn), Keep3r Network (nền tảng thuê tác vụ tự động hóa), Akropolis và Pickle Finance (tổng hợp hoa lợi). Dù các giao thức trên là thành viên trong hệ sinh thái Yearn, tôken YFI không quản trị hay chi phối chúng.

Sản phẩm yVault Phiên bản v2 được phát hành vào đầu năm 2021, bao gồm biểu phí mới và khả năng tích hợp nhiều chiến lược cho từng kho bạc. Phiên bản yVault v1 chỉ có thể sử dụng một chiến lược mỗi kho.

---

## EBITDA đã điều chỉnh cho **Q3-21 là 11.6 triệu $** và Yearn tiếp tục tạo doanh thu từ sản phẩm yVault của mình trong quý này.

![](./image2.jpg?w=613&h=706)

### Cơ sở Trình bày

Các báo cáo tài chính được trình bày trên cơ sở kế toán dồn tích (`accrual basis`). Năm tài chính cho Yearn kết thúc vào cuối năm dương lịch 31/12. Số liệu tính theo Đô-la Mỹ (“USD”) và làm tròn lên hàng nghìn gần nhất. Các giải trình kinh tế được soạn với việc quy đổi nhiều ước tính và tài sản không-phải-USD thành Đô-la Mỹ bằng cách lấy giá cuối ngày từ Coingecko.com, hoặc trực tiếp truy vấn chuỗi khối (`blockchain`) Ethereum. Báo cáo tài chính này chưa được kiểm định toàn diện bởi bởi một tổ chức kiểm toán chuyên nghiệp bên-thứ-ba. Nó chỉ nhằm mục đích trình bày thông tin và không phải lời tư vấn tài chính hay đầu tư dưới bất kỳ hình thức nào. Các bảng dữ liệu có thể chứa lỗi số học nhỏ từ việc làm tròn.

- Thị trường tiền mã thuật số (`cryptocurrency`) sụt giá lớn cuối tháng 05 và tiếp tục cho tới đầu tháng 07; tuy nhiên, Yearn đã vẫn tạo ra doanh thu có ý nghĩa, đều đặn trong quý. Doanh thu từ yVault tiếp tục xu hướng tăng lên khi thị trường tiền mã thuật số (`cryptocurrency`) phục hồi.
- Doanh thu yVault đạt 8.1 triệu $ trong tháng 08, tương đương doanh thu tháng 04/21 (8.7 triệu $) và tháng 06/21 (8.1 triệu $), vốn nằm trong số các tháng có lời nhất của Yearn tính từ đầu năm 2021.
- Cho đến tháng 09/21, hầu như mọi doanh thu được tạo ra từ các kho bạc của Yearn đều bắt nguồn ở sản phẩm yVault  v2. yVault phiên bản v2 tiên tiến, linh hoạt và tinh vi gấp bội, mang lại nhiều kho bạc hơn cho người dùng Yearn.
- Ở cuối tháng 06/21, Ngân khố Yearn giảm đáng kể hoạt động "canh tác" hoa lợi (`Yield farming`) do biến động thị trường để bảo vệ vốn khỏi nguy cơ bị thanh lý. Tuy nhiên, đến tháng 09/21, Yearn bắt đầu kiếm lời từ tài sản nhàn rỗi trữ trong Ngân khố (`Treasury`) và thu về 266 nghìn $.
- Các báo cáo và dữ liệu tài chính đã chia sẻ trước đây chưa kể phí chiến lược gia do khó khăn trong việc định lượng cũng như tính toán. Thế nhưng, với sự tinh vi tài chính cao hơn, chúng tôi giờ đã có thể tính toán và định lượng chúng. Do đó, doanh thu các tháng trước được cộng tổng (tăng lên) để hiển thị số doanh thu chưa kể phí chiến lược gia, cũng như định lượng khoản phí trả cho chiến lược gia.
- Chi phí để-có-được doanh thu (`Cost of revenue`) bao gồm các khoản tiêu thay đổi liên quan trực tiếp đến công tác tạo thu nhập của sản phẩm Yearn cốt lõi. Chúng bao gồm phí Chiến lược gia, phí gas liên quan đến việc triển khai–duy trì chiến lược mới và/hoặc chiến lược đang tồn tại, cũng như trả cho các Đối tác Yearn. Phí phải trả khi sử dụng kho bạc Yearn gồm 2% đối với tài sản quản lý (AUM) và 20% tổng doanh thu. 10% tổng doanh thu tạo ra được trao thưởng cho Chiến lược gia, 10% còn lại vào Ngân khố Yearn.
- Các giao thức trong thế giới ĐeFi có thể gia nhập Chương trình Đối tác của Yearn (`Yearn Partners program`) và nhận phần chia sẻ phí doanh thu từ kho bạc Yearn trên bất cứ lượng vốn nào mà giao thức mang lại cho những sản phẩm Yearn. Các khoản trên thường được thanh toán sau 1 tháng và chúng tôi đã tích lũy chúng tương ứng. Cho Q3/21, khoảng 781 nghìn đô-la Mỹ đã được dùng để trả cho các thành viên chương trình Đối tác Yearn.
- Cộng tác viên Yearn đủ tư cách nhận được đồng YFI theo kế hoạch dàn trải thù lao (`vesting compensation`). Chính sách phát hành dàn trải (`vesting`) này được duyệt thông qua bởi cộng đồng quản trị bằng `YIP-57: Cấp vốn cho Tương lai của Yearn`. Đồng YFI được trả dàn trải trong 3 năm sau khi cộng tác viên đó chính thức làm việc cùng Yearn. Yearn có khả năng thu hồi YFI chưa phát hành dưới dạng thù lao dàn trải nếu cộng tác viên, vì bất cứ lý do gì, ngừng cống hiến cho Yearn. Thù lao dàn trải (`vesting`) cho cộng tác viên là khoản chi tiêu theo cơ sở kế toán dồn tích (`accrual basis of accounting`). Tuy nhiên, vì không phải tiền mặt, nó thuộc một trong số những khoản không được tính vào EBITDA đã điều chỉnh.
- Lương quản lý (`Administrative salary`) là tiền trả cho các đóng góp viên toàn thời gian của Yearn. Lương có sự tăng nhẹ do ê-kíp Yearn đang mở rộng để mang lại cấp độ dịch vụ và đổi mới cao hơn cho người dùng của mình.
- Chi phí bảo đảm an toàn (`Security expense`) bao gồm tiền thưởng báo lỗi (`bug bounty`) và kiểm toán (`audit`) cho các hợp đồng thông minh (`smart contract`). Trong tháng 06/21, Yearn trả 201 nghìn $ tiền thưởng báo lỗi (`bug bounty`) cho một chuyên gia nghiên cứu bảo mật, vốn cấu thành phần lớn chi phí bảo an ở quý này.
- Trợ cấp (`grant`) bao gồm các khoản chi theo chương trình Coordinape và nhiều tài trợ một-lần khác cho đóng góp viên của hệ sinh thái Yearn. Tháng 07/21, 23.32 tôken YFI (xấp xỉ 697 nghìn $) được trả cho bốn đóng góp viên hỗ trợ việc hoàn thành `YFI Story`. `YFI Story` là một cuốn sách viết mừng sinh nhật 1 năm của Yearn và kể về lịch sử Yearn từ lúc chính thức ra mắt. Coordinape là một chương trình trợ cấp phi tập trung, mới lạ để đãi ngộ đóng góp viên bán thời gian nội trong cộng đồng Yearn. Thành viên cộng tác toàn thời gian ở Yearn biểu quyết mỗi kỳ về số lượng YFI tưởng thưởng cho các đóng góp viên bán thời gian nói trên.
- Lương quản lý (`Administrative salary`), chi trả Coordinape và trợ cấp thường được thanh toán một tháng sau. Do vậy, chúng tôi đã tích lũy chúng để tính vào tháng kiếm được nhưng chưa trả. Điều này nhất quán với cơ sở kế toán dồn tích (`accrual basis of accounting`).
- Những khoản tiêu pha khác về mặt vận hành (`Other operating expense`) bao gồm chi phí cải thiện trải nghiệm/giao diện người dùng (UX/UI), cơ sở hạ tầng, quảng bá sự kiện và mọi chi phí khác không lường trước được mà giao thức phát sinh. Trong một số trường hợp rất hạn chế và mang tính chu kỳ, người dùng kho bạc Yearn gặp tổn thất do lỗi của chính họ hoặc nhiều sự kiện bất ngờ khác. Yearn hoàn tiền cho những người dùng này và đứng ra chịu chi phí. Theo đó, 87&nbsp;nghìn&nbsp;$ cùng 338&nbsp;nghìn&nbsp;$ đã được đền bù cho người dùng trong tháng 05 và 06. Chúng tôi dự đoán các khoản tổn thất định kỳ sẽ phát sinh trong tương lai, nhưng hoàn toàn có cơ sở để chắc rằng nó không lớn so với doanh thu chính.
- Các thu nhập/(chi phí) khác [`Other income/(expenses)`] bao gồm lãi vay phải trả liên quan đến nhiều hoạt động "gặt" hoa lợi của Yearn với tài sản trong Ngân khố (`Treasury`). Lãi suất bị áp dụng cho bất kỳ khoản nợ nào đi mượn từ những giao thức cho vay phi tập trung trong DeFi. Chúng tôi tổng hợp chi phí lãi vay này khi nó phát sinh theo cơ sở kế toán dồn tích (`accrual basis of accounting`).
- EBITDA đã điều chỉnh (`Adjusted EBITDA`) không tính lãi vay, thuế, khấu hao & khấu trừ dần, cũng như nhiều chi phí ngoài-tiền-mặt (như thù lao tính-bằng-đơn-vị-tôken) hoặc các khoản không lặp lại.
- Yearn có EBITDA đã điều chỉnh (`Adjusted EBITDA`) vào loại mạnh trong Q3/21 bất chấp thu nhập chính giảm ở quý này do điều kiện thị trường tiền mã thuật số không thuận lợi. Chúng tôi dự kiến EBITDA tiếp tục tăng trưởng ở Q4/21.

---

## Biên lợi hoạt động (`operating margin`) của Yearn cho Q3/21 là 68%, phần lớn chi phí đều từ đãi ngộ đóng góp viên, chủ yếu gồm phí Chiến lược gia.

![](./image3.jpg?w=964&h=687)

### Tác nhân Chủ yếu của Kết quả Tài chính

- Biểu đồ phía trên thể hiện các tác nhân tài chính quan trọng cho Q3-21 đối với EBITDA đã điều chỉnh. Các khoản được điều chỉnh gồm có lãi vay, thuế, khấu hao & khấu trừ dần, chi phí ngoài-tiền-mặt (thù lao dàn trải cho cộng tác viên), các khoản không lặp lại (quà tặng–`airdrop`, quyên góp, tổn thất một-lần không lường trước, cũng như lượng lời/(lỗ) vốn.
- Phần lớn chi phí hoạt động –dù phần trăm tương đối nhỏ so với doanh thu –đều liên quan đến lương và trợ cấp cần thiết để duy trì cũng như phát triển giao thức.
- Chi phí hoạt động khác chủ yếu là các khoản không lường trước, ảnh hưởng đến người dùng và được Yearn hoàn tiền.

---

## Thu nhập yVault phục hồi mạnh ở tháng 08 và 09/21, sau doanh thu tháng 07/21 tương đối thấp do điều kiện thị trường tiền mã thuật số không thuận lợi.

![](./image4.jpg?w=620&h=691)

- Bảng trên chỉ hiển thị Top 25 kho bạc (`yVault`), sắp xếp theo tổng doanh thu cho Q3. Yearn đã phát hành hơn 125 yVault, kể cả những kho bạc đang dần lỗi thời và không còn chính thức hoạt động nữa.
- yvUSDC là kho bạc có lợi nhuận cao nhất tính đến Q3 năm nay và đã tạo ra 4.2 triệu $ cho giao thức Yearn. Kho bạc yvUSDC vận dụng nhiều chiến lược, trong đó có cả một "đòn bẩy tài chính" `folding` trên Compound Finance và AAVE. Thêm vào đó, Abracadabra Finance cho phép người dùng tạo MIM (một loại tiền bình giá của Abracadabra) trên nền tảng tương ứng bằng cách sử dụng tôken kho bạc yvUSDC làm thế chấp. Chúng tôi đã ghi nhận thu nhập cao hơn kể từ tháng 08/21 do người dùng ký gửi vào kho bạc yvUSDC để thực hiện hoạt động này.
- Kho bạc yvDAI tiếp tục là thành phần chủ chốt của giao thức Alchemix, đã thu hút và giữ được giá trị ký gửi cho mục đích này. Người dùng của Alchemix ký gửi DAI vào yvDAI của chúng tôi, thu được lãi suất đầu tiên. Alchemix cho họ hạn mức tín dụng dưới dạng alUSD, một tôken "giả hợp" (`synthetic`) độc đáo của giao thức Alchemix.
- Kho bạc ETH có lời nhất của chúng tôi là yvStETH, với phần thưởng CRV kiếm được từ bể thanh khoản stETH trên Curve Finance. Đồng CRV được định kỳ thu hoạch rồi dùng để mua thêm tôken tài-sản-nền của kho bạc này. Những người ký gửi ETH có thể thu lợi với nguy cơ lỗ tạm thời (`impermanent loss` hay IL) ở mức tối thiểu. Kho bạc này đại diện cho một trong những cách đỡ-rủi-ro nhất để sở hữu lãi suất với đồng Ethereum mà không cần lo lắng về IL.
- Phần lớn các yVault của chúng tôi tập trung vào những chiến lược liên quan đến Curve&nbsp;Finance để thu được phần thưởng CRV và ký gửi vào nhiều bể thanh khoản (`liquidity pool`) trên Curve.

---

## Số lượng cộng tác viên toàn-thời-gian đã tăng lên trong Q3 do Yearn đón chào thêm nhân lực để duy trì các sản phẩm hiện có và sáng tạo cái mới.

![](./image5.jpg?w=698&h=272)

- Tính đến Q3-21, Yearn ĐAO có tổng cộng 26 đóng góp viên hỗ trợ phát triển, vận hành, tiếp thị và/hoặc dịch vụ pháp lý.
- Phần lớn đóng góp viên ở Yearn là các nhà lập trình giúp duy trì sản phẩm của Yearn.
- Lương quản lý (`Administrative salary`) của Q3-21 không đến 4.5% tổng lợi nhuận chưa-tính-chi-phí (`gross profit`) trong cùng khoảng thời gian này.
- Lương thường được thanh toán sau 1 tháng và chúng tôi đã tích lũy chúng theo khoản chi trong tháng tương ứng.

---

## Yearn tiếp tục đãi ngộ đóng góp viên bán thời gian bằng cách ứng dụng chương trình trợ cấp phi tập trung mới lạ của mình—Coordinape.

![](./image6.jpg?w=782&h=162)

- Coordinape tiếp tục đãi ngộ đóng góp viên bán thời gian cho Yearn bằng tôken YFI mỗi tháng. Trong Q3-21, số lượng phân bổ cho thành viên trong Coordinape đã tăng lên khoảng 73–78 nghìn $ tính theo giá trị tôken YFI hàng tháng.
- Chương trình Coordinape rất mở và chào đón bất cứ cá nhân nào muốn đóng góp cho giao thức Yearn để được tưởng thưởng. Coordinape là mô hình lựa chọn và giải ngân trợ cấp theo cách phi tập trung. Những ai đã nhận trợ cấp và cộng tác viên toàn-thời-gian được trao 100 tôken GIVE mỗi người. Số tôken này có thể phân bổ cho bất kỳ ai đóng góp công sức vào hệ sinh thái Yearn. Cộng tác viên hưởng lương đều đặn không có quyền nhận trợ cấp. Ngân sách Coordinape, được duyệt bởi ê-kíp yBudget, đã tăng lên từ Q2 và kể từ tháng 06/2021 rơi vào khoảng 58&nbsp;nghìn&nbsp;$ mỗi tháng.
- Bạn có thể truy cập Coordinape tại đây: https://coordinape.com/
- Trợ cấp (`grant`) đã cao hơn trong tháng 07/21 do Yearn phát sinh chi phí liên quan đến việc tạo `YFI Story`. Các đóng góp viên giúp tạo nên `YFI Story` được trả công theo tôken YFI, coi như chi phí ngoài-tiền-mặt của giao thức Yearn, tức là YFI thanh toán trực tiếp từ Ngân khố (`Treasury`) thay vì tiền mặt.

---

## Yearn đã tái thu xấp xỉ 130.50 YFI kể từ khi chương trình mua lại bắt đầu vào tháng 11/2020.

![](./image7.jpg?w=741&h=619)

- `YIP-55: Mua lại và Xây dựng Yearn` đã được thông qua vào tháng 11/2020. Nó thay thế mô hình phân chia lợi nhuận (qua hình thức "đặt cọc"–`staking`) bằng phương thức tái thu tôken của mình từ thị trường tự do. Lợi nhuận sau khi trang trải chi phí trước-vận-hành (`overhead cost`) được dùng để mua lại YFI rồi tích trữ trong Ngân khố (`Treasury`) của Yearn.
- Ê-kíp yBudget hoạch định ngân sách tái thu YFI hàng tháng dựa trên phân tích lợi nhuận mỗi 30 ngày. YFI tích lũy ở Ngân khố (`Treasury`) được dùng để khuyến khích cộng tác viên trong tương lai (thù lao dàn trải—`vesting`), các chương trình xuyên-giao-thức hoặc khai thác thanh khoản (`liquidity mining`) có thể xuất hiện về sau. Tất cả do ê-kíp yBudget và yPeople xác định rồi sau đó hiện thực hóa bởi Ví đa-ký (`Multisig`).
- Yearn sẽ tiếp tục mua lại đồng YFI mỗi tháng bằng cách dùng lợi nhuận mà giao thức thu được, trừ khi có đề xuất quản trị YIP mới làm thay đổi chính sách này.
- Q2 cũng như Q3-21 ghi nhận nhiều lần mua lại YFI đáng kể từ Ngân khố và chúng tôi kỳ vọng điều này sẽ tiếp tục trong tương lai gần.

---

## Yearn sở hữu khối tài sản khoảng 159&nbsp;triệu&nbsp;$ trong Ngân khố (`Treasury`), và không có nợ ròng—`net debt` (nợ chưa thanh toán trừ tiền mặt) tính đến tháng 09/2021.

![](./image8.jpg?w=781&h=619)

- **Tiền mặt & tương đương tiền mặt (`Cash & cash equivalents`)** –Phí quản lý và phí thành quả nợ giao thức Yearn được gửi vào Ngân khố (`Treasury`) Yearn dưới dạng tôken cấp thanh khoản (`liquidity provider token` hay "LP") của yVault. Theo thời gian, Ngân khố (`Treasury`) Yearn tự nhiên tích lũy một lượng dự trữ các tôken này khi yVault tiếp tục tạo thêm doanh thu cho giao thức. Ê-kíp yBudget đã đều đặn tích lũy tăng dần số dư tiền mặt (`cash balance`) của Yearn để duy trì hoạt động và phát triển sáng tạo cái mới bất kể điều kiện thị trường tiền mã thuật số (`cryptocurrency`). Vốn tiền mặt lớn giúp Yearn ít chịu ảnh hưởng từ các sự kiện khó lường mà có thể làm giảm doanh thu từ sản phẩm yVault của mình.
- **Các khoản phải thu (`Accounts receivable`)** –Đại diện cho lợi nhuận kiếm được nhưng chưa "thu hoạch", tạo ra từ việc dùng Ngân khố (`Treasury`) Yearn để "canh tác" lãi suất. Yearn dừng hoạt động canh tác hoa lợi ở tháng 06/21 nhưng bắt đầu thu lời trên tài sản nhàn rỗi vào tháng 09/2021. Không có khoản phải thu (`Accounts receivable`) nào từ tháng 06 đến tháng 08 do Yearn đã thu hoạch và hiện thực hóa mọi lợi nhuận liên quan đến hoạt động "gặt" hoa lợi.
- **Tồn kho (`Inventory`)** –Ban "canh tác" hoa lợi nội bộ của Yearn bắt đầu thu lời trên tài sản giữ trong Ngân khố (`Treasury`). Những khoản này là hạn mức tín dụng vay được từ MakerDAO hoặc Unit.xyz để thực hiện việc "gặt" lãi suất. Tất cả số nợ đã được trả hết vào tháng 06/2021, đó là lý do không có khoản tồn kho. Tháng 09/2021, Yearn đã mở một vị trí-nợ-có-thế-chấp (`collateralized debt position` hay "CDP") tại MakerDAO và lấy 13 triệu $ theo đồng DAI để sử dụng cho các hoạt động "gặt" hoa lợi.
- **Chi phí trả trước & tiền đặt cọc (`Prepaid expenses & security deposits`)** –Chi phí cơ sở hạ tầng trả trước cho Alchemy và các dịch vụ pháp lý. Trong tháng 08/21, Yearn trả 1 triệu $ cho một bên cung cấp dịch vụ pháp lý để giúp Yearn trong tương lai. Chúng tôi đã khấu hao khoản này đều qua 12 tháng. Tiền đặt cọc liên quan đến thỏa thuận dịch vụ Alchemy.
- **Các tài sản ngắn hạn khác (`Other short term assets`)** –Lợi nhuận từ hàng loạt yVault như yvCurve-LINK hay yvCurve-Tricrypto. Ngân khố Yearn định kỳ bán các tài sản này và dùng số tiền thu được để mua thêm YFI từ thị trường tự do. Chúng tôi kỳ vọng hoạt động này sẽ tiếp tục và tăng thêm lượng YFI trữ trong Ngân khố Yearn.
- **YFI** –Ngân khố (`Treasury`) sở hữu YFI từ cả lượng tạo thêm ở tháng 02/21, thể theo YIP-52, và chính sách mua lại YFI bằng thu nhập của giao thức. Tính đến tháng 06/2021, Ngân khố Yearn nắm khoảng 4047 YFI. Số dư này được để dành cho cộng tác viên trong tương lai, các chương trình xuyên-giao-thức hoặc khai thác thanh khoản (`liquidity mining`) có thể xuất hiện về sau.
- **ETH** – Ethereum hay tôken kho bạc dựa trên Ethereum giữ bởi Ngân khố. Ngân khố Yearn định kỳ bán ETH và tôken kho bạc dựa trên Ethereum rồi dùng số tiền thu được để mua thêm YFI từ thị trường tự do. Tất nhiên, chúng tôi cũng giữ một ít ETH trong bảng quyết toán (`balance sheet`) để trả phí gas liên quan đến việc sử dụng chỗi khối Ethereum.
- **BTC** – Tôken các kho bạc dựa trên Bitcoin mà Ngân khố sở hữu, kiếm được từ phí thành quả liên quan đến kho tương ứng. Chúng được bán định kỳ và số tiền thu về để mua YFI từ thị trường tự do.
- **Các tài sản dài hạn khác (`Other long term assets`)** –Bao gồm bể thanh khoản (`liquidity pool`) KP3R/ETH nhằm tạo tín dụng cần có để chi trả cho những "Quản công" (`Keeper`) làm nhiệm vụ thu hoạch nhiều kho bạc yVault của Yearn. Giá thị trường, kể cả bất cứ khoản lỗ tạm thời (`impermanent loss`) nào. Chúng tôi không định bán các tài sản này trong tương lai gần do cần để tạo tín dụng nhằm chi trả cho những "Quản công" (`Keeper`) làm nhiệm vụ thu hoạch nhiều kho bạc yVault.
- **Các khoản phải trả (`Accounts payable`)** –Các khoản phải trả cho những bên cung cấp dịch vụ (chủ yếu là kiểm toán bảo an) hoặc Đối tác của Yearn. . Các khoản phải trả (`Accounts payable`) đã tăng lên ở tháng 05/21 do những thanh toán dồn tích chưa trả cho nhiều Đối tác Yearn. Số dư trên đã được trả hết vào tháng 06/2021. Cũng phải nói rõ, các khoản trả cho Đối tác Yearn thường được thanh toán sau một tháng, đó là lý do số dư luôn tồn tại ở tháng tiếp theo.
- **Chi phí cần thanh toán (`Accrued expenses`)** – Chủ yếu là lương chưa trả, thanh toán Coordinape hay trợ cấp cho đóng góp viên của Yearn. Các khoản trên thường được thanh toán sau 1 tháng và chúng tôi đã tích lũy chúng trong những tháng nợ đóng góp viên. Điều này nhất quán với cơ sở kế toán dồn tích (`accrual basis of accounting`).
- **Lãi phải trả (`Interest payable`)** –Tiền lãi tồn động nhưng chưa trả liên quan đến nợ của hoạt động "gặt" hoa lợi bằng Ngân khố (`Treasury`) đã mô tả ở phần trước. Tiền lãi được tổng hợp lại theo như cơ sở kế toán dồn tích (`accrual basis of accounting`).
- **Nợ dài hạn (`Long term liabilities`)** –Nợ đối với MakerDAO và Unit.xyz liên quan đến hoạt động "gặt" hoa lợi bằng Ngân khố (`Treasury`). Nợ đối với giao thức Unit&nbsp;Protocol đã được trả hết hoàn toàn vào tháng 06/2021. Tính đến tháng 09/21, Yearn chỉ nợ MakerDAO liên quan đến vị trí-nợ-có-thế-chấp (`collateralized debt position` hay "CDP") do Ngân khố Yearn mở. Yearn sử dụng số tiền từ khoản vay này để kiếm lời trên số YFI nhàn rỗi trữ trong Ngân khố (`Treasury`). Ngân khố Yearn có thể đóng và hoàn trả vị trí-nợ-có-thế-chấp (CDP) nói trên để bảo vệ vốn trong trường hợp thị trường nhiều biến động. Tuy nhiên, Yearn có đủ số dư tiền mặt để trả hết khoản nợ đó mọi lúc mà không cần bán bất kỳ tài sản nào khác.
- **Cổ phần (`Equity`)** –Bao gồm thu nhập tổng hợp tích lũy khác liên quan đến việc định giá tài sản nắm giữ trong bảng quyết toán (`balance sheet`) của Yearn so với giá thị trường hợp lý (`fair market value` hay FMV) vào cuối tháng.

---

## Tổng Giá trị Ký gửi (TVL) của Yearn vượt mốc 5.0&nbsp;tỷ&nbsp;$ tính đến ngày 30/09/2021 và tiếp tục cho thấy sự tăng trưởng mạnh mẽ.

![](./image9.jpg?w=714&h=654)

- Tổng Giá trị Ký gửi (TVL) của Yearn đạt hơn 5.0&nbsp;tỷ&nbsp;$, vượt đỉnh cao nhất lịch sử trong Q3-21, xô đổ kỷ lục lập được ở Q2-21.
- Phần lớn TVL là từ dòng sản phẩm yVault v2. Vào cuối tháng 05 và xuyên suốt tháng 06, chúng tôi đã chuyển một lượng lớn kho bạc v1 sang v2. Phiên bản v1 không còn được hỗ trợ nữa. Mọi người ký gửi được khuyên chuyển sang v2.
- Iron&nbsp;Bank là nền tảng cho vay nội bộ của Yearn cùng sự hợp tác với C.R.E.A.M.&nbsp;Finance. Chúng tôi tiếp tục ghi nhận sự tăng trưởng về TVL của Iron&nbsp;Bank từ Q1 sang Q2.
- Yearn có hơn 5&nbsp;tỷ&nbsp;$ TVL **mà chưa hề áp dụng bất kỳ tôken phụ cấp** hay hình thức khuyến khích nào thường thấy ở những giao thức cạnh tranh trong DeFi.
- *Chú ý: Biểu đồ trên hiển thị dữ liệu tính đến 30/09/2021.*
- Nguồn: Github: [yearn/yearn-exporter](https://github.com/yearn/yearn-exporter)

---

## Chúng tôi tiếp tục cải thiện bảng đo tài chính của mình để hiển thị các giao dịch, Giải trình Thu nhập (`Income Statement`) và Bảng Quyết toán (`Balance Sheet`).

![](./image10.jpg?w=1058&h=611)

- Bảng đo tài chính của chúng tôi hoàn toàn công khai, giúp mọi thành viên cộng đồng có cái nhìn chi tiết hơn về những giao dịch liên quan đến mọi hoạt động ở Yearn. Bạn có thể xem sao kê giao dịch theo tháng, tôken, danh mục cùng nhiều thể loại khác bằng bộ lọc tương ứng.
- Xin vui lòng chú ý rằng bảng đo này hiển thị kế toán theo cơ sở tiền mặt (`cash-basis`), trong khi giải trình kinh tế ở những phần trước dựa trên cơ sở kế toán dồn tích (`accrual basis of accounting`). Đặc biệt, bảng đo không tính Các khoản phải thu (`accounts receivable`), Lãi phải trả (`accrued interest`), Lời & lỗ vốn chưa hiện thực hóa (`unrealized capital gains & losses`), hoặc những khoản trên cơ sở tích lũy khác.
- Bảng đo tài chính cũng chưa được kiểm định toàn diện bởi một tổ chức kiểm toán bên-thứ-ba và chỉ nhằm mục đích trình bày thông tin. Nó không phải lời tư vấn tài chính, đầu tư dưới bất kỳ hình thức nào.
- Bạn có thể truy cập bảng đo nói trên tại https://www.yfistats.com/financials/financials.html

---

## Nguồn

- Dữ liệu doanh thu được lấy từ giao dịch tôken giữa nhiều địa chỉ ví mà giao thức Yearn sở hữu. Các địa chỉ Ethereum này được liệt kê dưới đây.
   - Kho bạc Ngân khố (`Treasury`): [0x93a62da5a14c80f265dabc077fcee437b1a0efde](https://etherscan.io/address/0x93a62da5a14c80f265dabc077fcee437b1a0efde)
   - Ví đa-ký (`Multi-sig`): [0xfeb4acf3df3cdea7399794d0869ef76a6efaff52](https://etherscan.io/address/0xfeb4acf3df3cdea7399794d0869ef76a6efaff52)
   - Cọc quản trị (`Governance staking`): [0xba37b002abafdd8e89a1995da52740bbc013d992](https://etherscan.io/address/0xba37b002abafdd8e89a1995da52740bbc013d992)

- Giá trị tôken được lấy từ Coingecko, một bên cung cấp lịch sử giá cho mọi loại tiền mã thuật số (`cryptocurrency`) lớn, hoặc bằng cách chạy "nút lưu trữ" (`archive node`) Ethereum và truy vấn trực tiếp từ chuỗi khối (`blockchain`) này.

- Xin vui lòng liên hệ với ê-kíp chúng tôi qua Telegram hay Discord nếu có bất cứ thắc mắc cụ thể nào.
   - [t.me/yearnfinance](https://t.me/yearnfinance)
   - [https://discord.com/yearn](https://discord.com/yearn)
