---
title:  "Báo cáo Tài chính Q2–2021 của Yearn Finance"
date: '2020-12-14'
image:
  src: ./cover.jpg
  width: 1500
  height: 500
author: Yearn
translator: 🤖💵💵💰💰.eth
---

# Báo cáo Tài chính Hàng Quý của Yearn Finance

![](/_posts/_financials/quarterly-report/2021-Q2/image1.jpg?w=1500&h=500)

## Cho Q2–2021

>THÔNG CÁO BẤT NHẬN TRÁCH NHIỆM
>
>Mọi dữ liệu, mệnh đề và thông tin trong báo cáo này chỉ nhằm mục đích trình bày thông tin, không cấu thành lời tư vấn tài chính hay đầu tư. Hơn nữa, các báo cáo tài chính ở đây chưa được kiểm định toàn diện bởi bởi một tổ chức kiểm toán bên-thứ-ba. Do đó, có thể tồn tại những thiếu sót hoặc lệch lạc về cơ bản làm sai báo cáo tài chính. Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất hay hậu quả tài chính nào có thể xảy ra khi quyết định đầu tư dựa trên dữ liệu trình bày trong nội dung. Thêm vào đó, bằng việc xem báo cáo này, bạn chấp thuận rằng các mệnh đề bên trong không cấu thành sự đại diện, bảo đảm hay bảo lãnh về bất cứ vấn đề gì, cũng như bạn sẽ không dựa vào chúng từ đây về sau và sẽ tiến hành thẩm định của riêng mình. Từ đây, bạn từ bỏ, giải phóng và phủ nhận bất kỳ cùng tất cả mọi khiếu nại, yêu sách hay tranh chấp chống lại Yearn&nbsp;Finance, những cộng tác viên liên can cũng như tác giả của tư liệu này.
>
>BÁO CÁO NÀY KHÔNG CẤU THÀNH LỜI TƯ VẤN CHO BẤT CỨ MỤC ĐÍCH NÀO.
>
>Các yếu tố lạc quan trong báo cáo này phụ thuộc vào nhiều giả định, rủi ro và những sự kiện không chắc chắn, thay đổi theo thời gian. Rủi ro không hề ít, từ công nghệ chuỗi khối (`blockchain`) và mã hóa nói chung cho đến Yearn nói riêng, có thể gây ra hậu quả thực tế hoặc khiến quá trình phát triển mà chúng tôi tiên liệu không thành hiện thực, hay ngay cả khi hoàn thành về thực chất cũng không đem lại bất kỳ/tất cả lợi ích hằng mong đợi. Chúng tôi có quyền thay đổi kế hoạch, kỳ vọng và ý định được nêu ở đây vào bất cứ lúc nào. Chúng tôi không có nghĩa vụ phải cập nhật công khai hay sửa đổi mọi phát ngôn lạc quan dù là kết quả từ thông tin mới, thành tựu phát triển trong tương lai hoặc ngược lại.
>
>THEO ĐÓ, CHÚNG TÔI KHUYẾN CÁO BẠN KHÔNG TIN VÀO, CŨNG NHƯ KHÔNG RA BẤT CỨ QUYẾT ĐỊNH ĐẦU TƯ HAY TÀI CHÍNH NÀO DỰA TRÊN CÁC GIẢI TRÌNH CÓ TRONG BẢN CẬP NHẬT NÀY—KỂ CẢ CŨNG NHƯ KHÔNG GIỚI HẠN VIỆC BÁN/GIAO DỊCH ĐỒNG YFI, ETHER HOẶC MỌI TÔKEN CHUỖI KHỐI (`BLOCKCHAIN`) KHÁC.

## Mục lục

- Giới thiệu về Yearn Finance
- Giải trình Thu nhập (`Income Statement`)
- Mua lại YFI
- Thu nhập của Chiến lược gia
- Bảng Quyết toán (`Balance Sheet`)
- Yearn Không có Nợ
- Tổng Giá trị Ký gửi (`Total Value Locked` hay TVL)
- Bảng đo Tài chính Tương tác
- Nguồn

## Giới thiệu về Yearn Finance

![](/_posts/_financials/quarterly-report/2021-Q2/image2_vn.jpg)

Yearn Finance (“Yearn”) là giao thức tổng hợp hoa lợi hàng đầu trong lĩnh vực tài chính phi tập trung ("DeFi") hoạt động trên chuỗi khối (`blockchain`) Ethereum. Nó phát hành đầu năm 2020 với sản phẩm iEarn, sử dụng thuật toán để di chuyển tiền bình giá (`stable coin`) như USDC, USDT, DAI giữa nhiều giao thức cho vay trong DeFi nhằm thu được lãi suất tối ưu nhất tại mọi thời điểm. Sản phẩm này còn được biết đến với tên yPool trên Curve&nbsp;Finance. Curve là một sàn giao dịch phi tập trung chú trọng vào tính năng bán-đổi (`swap`) có độ trượt giá thấp giữa hàng loạt loại tiền bình giá (`stable coin`). Tháng 07/2020, tôken YFI được phân phối trong khoảng 10 ngày cho những người dùng cung cấp vốn vào nhiều bể thanh khoản (`liquidity pool`) liên quan tới yPool–một quy trình thường truyền miệng là "canh tác" (`farming`) hay "gặt" hoa lợi (`yield-farming`). Tôken YFI dùng để quản trị giao thức Yearn.

Không lâu sau khi phân phối xong tôken YFI, sản phẩm yVault ra mắt. yVault cho phép người dùng ký gửi vốn vào các hợp đồng thông minh (`smart contract`) để Chiến lược gia –những chuyên gia "gặt" hoa lợi –thay mặt bên gửi tìm kiếm lãi một cách tự động và hiệu quả. Phí Gas được "xã hội hóa" khắp toàn bộ bể góp vốn, mang lại tính kinh tế hơn cho người dùng nhỏ lẻ khi tham gia hoạt động "canh tác". Người dùng bình thường cũng không cần kiến thức chuyên sâu về DeFi, "gặt" hoa lợi hay cấp thanh khoản (`liquidity`), bởi Chiến lược gia sẽ vận dụng mã lập trình hợp đồng thông minh (`smart contract`) thay mặt thực hiện những tác vụ cần thiết. Lợi nhuận từ việc "canh tác" được Chiến lược gia thu hoạch định kỳ và ký gửi tiếp vào kho bạc (`vault`); người gửi có thể lấy những khoản lời này. Sản phẩm yVault đại diện cho mô hình kinh doanh cốt lõi của Yearn, nhưng kể từ đầu năm 2021, Ngân khố Yearn (`Yearn Treasury`) bắt đầu tham gia "gặt" hoa lợi bằng chính những tài sản đang nắm giữ để tạo thêm dòng tiền (`cash flow`) bổ sung.

Yearn đã thực hiện một loạt các quan hệ hợp tác vào mùa thu năm 2020, hình thành Hệ sinh thái Yearn. Chúng bao gồm SushiSwap (Trình tạo Thị trường hay Nhà cái Tự động—`Automated Market Maker`), C.R.E.A.M (vay–mượn), Keep3r Network (nền tảng thuê tác vụ tự động hóa), Akropolis và Pickle Finance (tổng hợp hoa lợi). Dù các giao thức trên là thành viên trong hệ sinh thái Yearn, tôken YFI không quản trị hay chi phối chúng.

Sản phẩm yVault Phiên bản v2 được phát hành vào đầu năm 2021, bao gồm biểu phí mới và khả năng tích hợp nhiều chiến lược cho từng kho bạc. Phiên bản yVault v1 chỉ có thể sử dụng một chiến lược mỗi kho.

## EBITDA đã điều chỉnh cho _Q2–21 là 16.4 triệu $, với 6.6 triệu $_ thu được chỉ trong tháng 05/21, tháng lãi cao nhất của Yearn. Tăng trưởng EBITDA hàng quý cao hơn 235% từ Q1 đến Q2.

![](/_posts/_financials/quarterly-report/2021-Q2/page5.jpg?w=637&h=724)

### Cơ sở Trình bày

Các báo cáo tài chính được trình bày trên cơ sở kế toán dồn tích (`accrual basis`). Năm tài chính cho Yearn kết thúc vào cuối năm dương lịch 31/12. Số liệu tính theo Đô-la Mỹ (“USD”) và làm tròn lên hàng nghìn gần nhất. Các giải trình kinh tế được soạn với việc quy đổi nhiều ước tính và tài sản không-phải-USD thành Đô-la Mỹ bằng cách lấy giá cuối ngày từ Coingecko.com, hoặc trực tiếp truy vấn chuỗi khối (`blockchain`) Ethereum. Báo cáo tài chính này chưa được kiểm định toàn diện bởi bởi một tổ chức kiểm toán bên-thứ-ba. Nó chỉ nhằm mục đích trình bày thông tin và không phải lời tư vấn tài chính hay đầu tư dưới bất kỳ hình thức nào. Các bảng dữ liệu có thể chứa lỗi số học nhỏ từ việc làm tròn.

- Dòng sản phẩm yVault là nguồn tạo doanh thu chính của Yearn và chứng kiến đà tăng trưởng phi mã trong Q2.
   yVault có sự phát triển lớn là nhờ Tổng Giá trị Ký gửi (`Total Value Locked` hay TVL) tăng vọt cùng hoa lợi cao khắp DeFi, giúp đẩy mạnh lợi nhuận chung cho Yearn. Một trong những chiến lược yVault chính bao gồm việc tạo hoa lợi bằng cách "thu hoạch" và bán tôken quản trị của Curve (đồng CRV). Giá trị tôken CRV tăng cao trong Q2 đã ảnh hưởng tích cực đến lợi nhuận của Yearn.
- Trong Q2, Yearn bắt đầu chuyển đổi dòng sản phẩm yVault từ v1 sang v2. yVault phiên bản v2 tiên tiến, linh hoạt và tinh vi gấp bội, mang lại nhiều kho bạc hơn cho người dùng Yearn. Như ở bảng trên (bên trái nếu là tệp PDF), doanh thu từ kho bạc v2 thu được nhiều hơn –đáng chú ý nhất vào tháng 06/21 –bởi một lượng lớn TVL di chuyển từ v1 sang v2. _Dữ liệu yVault chi tiết sẽ xuất hiện ở phần tiếp theo của báo cáo này._
- Cuối tháng 02/21, Yearn bắt đầu kiếm lời từ tài sản nhàn rỗi trữ trong Ngân khố (`Treasury`). Đến hết tháng 05, Yearn giảm hoạt động "canh tác" hoa lợi (`Yield farming`) do biến động thị trường để bảo vệ vốn khỏi nguy cơ bị thanh lý.
   Không có tài sản nào của Yearn bị thanh lý, nhưng thu nhập từ các hoạt động "gặt" hoa lợi tương ứng đã giảm đi trong tháng 05 và 06.
- Chi phí để-có-được doanh thu (`Cost of revenue`) bao gồm phí gas dùng khi triển khai hợp đồng (`contract`), các khoản nợ đối tác hoặc những hoạt động khác liên quan đến yVault. Chi phí để-có-được doanh thu (`Cost of revenue`) là biến số làm tăng hoặc giảm trực tiếp doanh thu ở hàng đầu tiên. Những lần "thu hoạch" (`harvest`) yVault bổ sung hoặc phí gas Ethereum tăng cao cũng ảnh hưởng đến các khoản tại dòng này. Một thành phần quan trọng khác trong chi phí để-có-được doanh thu (`cost of revenue`) là Chương trình Đối tác của Yearn (`Yearn Partners program`).

## Giải trình Thu nhập (`Income Statement`) – tiếp theo.

![](/_posts/_financials/quarterly-report/2021-Q2/page6.jpg?w=637&h=724)

- Cộng tác viên Yearn đủ tư cách nhận được đồng YFI theo kế hoạch dàn trải thù lao (`vesting compensation`). Chính sách phát hành dàn trải (`vesting`) này được duyệt thông qua bởi cộng đồng quản trị bằng `YIP-57: Cấp vốn cho Tương lai của Yearn`. Đồng YFI được trả dàn trải trong 3 năm sau khi cộng tác viên đó chính thức làm việc cùng Yearn. Yearn có khả năng thu hồi YFI chưa phát hành dưới dạng thù lao dàn trải nếu cộng tác viên, vì bất cứ lý do gì, ngừng cống hiến cho Yearn. Thù lao dàn trải (`vesting`) cho cộng tác viên là khoản chi tiêu theo cơ sở kế toán dồn tích (`accrual basis of accounting`). Tuy nhiên, vì không phải tiền mặt, nó thuộc một trong số những khoản không được tính vào EBITDA đã điều chỉnh.
- Lương quản lý (`Administrative salary`) chiếm phần quan trọng trong chi phí hoạt động sau khi trừ thù lao tính-bằng-đơn-vị-tôken, vốn là khoản tiêu ngoài-tiền-mặt (`non-cash expense`). Các khoản lương này là cần thiết để duy trì, phát triển cũng như giám sát giao thức. Số lượng cộng tác viên toàn-thời-gian đã tăng lên trong Q2 khi Yearn chào đón thêm lập trình viên, kỹ sư và nhân sự vận hành. _Danh sách chi tiết về nhân sự quản lý sẽ xuất hiện ở phần tiếp theo của báo cáo này._
- Chi phí bảo đảm an toàn (`Security expense`) bao gồm tiền thưởng báo lỗi (`bug bounty`) và kiểm toán (`audit`) cho các hợp đồng thông minh (`smart contract`). Không có chi phí vật tư bảo an nào phát sinh trong Q2, nhưng 57&nbsp;nghìn&nbsp;$ đã được tiêu dùng vào việc kiểm toán hợp đồng thông minh (`smart contract`) ở tháng 05, cùng với 1&nbsp;nghìn&nbsp;$ tiền thưởng báo lỗi không liên quan.
- Yearn đã khởi động chương trình Coordinape để phi tập trung hóa và phân phối các khoản trợ cấp (`grant`) cho cộng tác viên bán-thời-gian nội trong cộng đồng Yearn. Các khoản trợ cấp phát sinh hàng tháng đều liên quan đến chương trình Coordinape này.
- Những khoản tiêu pha khác về mặt vận hành (`Other operating expense`) bao gồm chi phí cải thiện trải nghiệm/giao diện người dùng (UX/UI), cơ sở hạ tầng, quảng bá sự kiện và mọi chi phí khác không lường trước được mà giao thức phát sinh. Trong một số trường hợp rất hạn chế và mang tính chu kỳ, người dùng kho bạc Yearn gặp tổn thất do lỗi của chính họ hoặc nhiều sự kiện bất ngờ khác. Yearn hoàn tiền cho những người dùng này và đứng ra chịu chi phí. Theo đó, 87&nbsp;nghìn&nbsp;$ cùng 338&nbsp;nghìn&nbsp;$ đã được đền bù cho người dùng trong tháng 05 và 06. Chúng tôi dự đoán các khoản tổn thất định kỳ sẽ phát sinh trong tương lai, nhưng hoàn toàn có cơ sở để chắc rằng nó không lớn so với doanh thu chính.
- Các thu nhập/(chi phí) khác [`Other income/(expenses)`] bao gồm lãi vay phải trả liên quan đến nhiều hoạt động "gặt" hoa lợi của Yearn với tài sản trong Ngân khố (`Treasury`). Lãi suất bị áp dụng cho bất kỳ khoản nợ nào đi mượn từ những giao thức cho vay phi tập trung trong DeFi. Chúng tôi tổng hợp chi phí lãi vay này khi nó phát sinh theo cơ sở kế toán dồn tích (`accrual basis of accounting`).
- EBITDA đã điều chỉnh (`Adjusted EBITDA`) không tính lãi vay, thuế, khấu hao & khấu trừ dần, cũng như nhiều chi phí ngoài-tiền-mặt (như thù lao tính-bằng-đơn-vị-tôken) hoặc các khoản không lặp lại.

## Yearn có biên lợi hoạt động (`operating margin`) rất cao (~&nbsp;50%) do chi phí trước-vận-hành (`overhead cost`) khá thấp so với thu nhập chính, chủ yếu từ các kho bạc yVault. Điều này là nhờ mô hình tích lũy giá trị hiệu quả từ dòng sản phẩm yVault.

![](/_posts/_financials/quarterly-report/2021-Q2/page7.jpg?w=1053&h=645)

### Tác nhân Chủ yếu của Kết quả Tài chính

- Biểu đồ phía trên (bên trái ở tệp PDF) thể hiện các tác nhân tài chính quan trọng cho Q2-21 đối với EBITDA đã điều chỉnh. Các khoản được điều chỉnh gồm có lãi vay, thuế, khấu hao & khấu trừ dần, chi phí ngoài-tiền-mặt (thù lao dàn trải cho cộng tác viên), các khoản không lặp lại (quà tặng–`airdrop`, quyên góp, tổn thất một-lần không lường trước, cũng như lượng lời/(lỗ) vốn.
- Doanh thu yVault vẫn là động lực chính, quan trọng nhất tác động lên EBITDA đã điều chỉnh trong quý này. Lợi nhuận từ việc "gặt" hoa lợi bằng Ngân khố (`Treasury`) gần như đã bù lại 100% những khoản tiêu cho lương quản lý (`administrative salary`) và trợ cấp (`grant`).
- Phần lớn chi phí hoạt động –dù phần trăm tương đối nhỏ so với doanh thu –đều liên quan đến lương và trợ cấp cần thiết để duy trì cũng như phát triển giao thức.
- Chi phí hoạt động khác chủ yếu là các khoản không lường trước, ảnh hưởng đến người dùng và được Yearn hoàn tiền.

# Doanh thu yVault chứng kiến sự tăng trưởng vượt bậc trong Q2, với riêng tháng 05 và tháng 06 đã làm lu mờ toàn bộ Q1-21.

![](/_posts/_financials/quarterly-report/2021-Q2/page8.jpg?w=614&h=728)

- Bảng trên (bên trái trong tệp PDF) chỉ hiển thị Top 25 yVault, sắp xếp theo tổng doanh thu cho Q2. Yearn đã phát hành hơn 125 yVault, kể cả những kho bạc đang dần lỗi thời và không còn chính thức hoạt động nữa.
- yvDAI vẫn là kho bạc có lợi nhuận cao nhất, một phần do vai trò của nó trong giao thức Alchemix. Người dùng của Alchemix ký gửi DAI vào yvDAI của chúng tôi, thu được lãi suất đầu tiên. Alchemix cho họ hạn mức tín dụng dưới dạng alUSD, một tôken "giả hợp" (`synthetic`) độc đáo của giao thức Alchemix. Kho bạc yvDAI cũng được sử dụng bởi một số yVault khác của chúng tôi. Theo dự kiến, kho bạc này sẽ tiếp tục mang lại doanh thu đáng kể trong tương lai.
- Một số kho bạc đã được chuyển từ v1 sang v2 vào tháng 06/2021. Đáng chú ý nhất là yvStETH, yvUSDP v1, yvEURS v1, yvLINK v1, yv3CRV v1, yvGUSD v1, yvsUSD v1, v.v... Các kho bạc v2 tinh vi và an toàn hơn, vì thế chúng tôi khuyến khích tất cả người dùng chuyển sang ký gửi vào yVault v2.
- Kho bạc ETH có lợi nhuận cao nhất là yvStETH, gặt hái phần thưởng CRV từ bể thanh khoản (`liquidity pool`) StETH tại Curve&nbsp;Finance. Đồng CRV được định kỳ thu hoạch rồi dùng để mua thêm tôken tài-sản-nền của kho bạc này. Tính đến ngày đăng tải báo cáo này, những người ký gửi ETH có thể thu được khoảng 8.5% APY với nguy cơ lỗ tạm thời (`impermanent loss` hay IL) ở mức tối thiểu. Kho bạc này đại diện cho một trong những cách đỡ-rủi-ro nhất để sở hữu lãi suất Ethereum cao mà không cần phải lo lắng về IL.
- Kho bạc yvLINK từ chúng tôi giúp chủ sở hữu đồng Chainlink thu được lãi suất trên tôken nhàn rỗi của mình với nguy cơ lỗ tạm thời (`impermanent loss` hay IL) không đáng kể. Kho bạc này tạo ra doanh thu gần 149&nbsp;nghìn&nbsp;$ cho Yearn trong quý.
- Phần lớn các yVault của chúng tôi tập trung vào những chiến lược liên quan đến Curve&nbsp;Finance để thu được phần thưởng CRV và ký gửi vào nhiều bể thanh khoản (`liquidity pool`) trên Curve.

# Yearn đã lãi 868&nbsp;nghìn&nbsp;$ từ hoạt động "gặt" hoa lợi bằng tài sản Ngân khố (`Treasury`) trong Q2.

![](/_posts/_financials/quarterly-report/2021-Q2/page9.jpg?w=670&h=519)

- Yearn có nguồn thu đáng kể từ việc "gặt" hoa lợi với tài sản nhàn rỗi mà Ngân khố (`Treasury`) của mình sở hữu trong Q2. Dòng tiền vào này bù lại gần như toàn bộ chi phí về lương và trợ cấp (987&nbsp;nghìn&nbsp;$) cho quý đang nói.
- Từ cuối tháng 05, Yearn giảm đáng kể việc "canh tác" hoa lợi do thị trường tiền mã thuật số (`crypto`) biến động mạnh hơn bình thường. Hoạt động "gặt" lãi suất phụ thuộc vào tài sản Ngân khố (`Treasury`) đặt cọc thế chấp cho các khoản mượn từ những giao thức cho vay phi tập trung trong DeFi. Để bảo vệ vốn, Yearn đã giảm bớt số nợ.
- Kể từ tháng 06/2021, toàn bộ khoản nợ đối với giao thức Unit&nbsp;Protocol được thanh toán xong và Yearn đã rút hết tài sản thế chấp ra.
- Một khoản nhỏ, khi đo tương quan với vốn hóa (`capitalization`) của Yearn, vẫn còn nợ MakerDAO.
   Tuy nhiên, Yearn có thừa số dư tiền mặt (`cash balance`) so với số nợ đó. Yearn đang sử dụng khoản nợ MakerDAO nói trên để tiếp tục hoạt động "canh tác" hoa lợi, dù ở quy mô nhỏ hơn trước đó trong quý.
- "Lãi suất" ở đây liên quan đến khoản nợ MakerDAO và Unit.xyz, hai giao thức trong DeFi cho phép người dùng mở các vị trí-nợ-có-thế-chấp (`collateralized debt position`). Lãi suất bị cộng dồn liên tục cho đến khi trả hết nợ và tài sản thế chấp được mở khóa. Chúng tôi liệt kê những lãi suất này vào mục chi phí theo như cơ sở kế toán dồn tích (`accrual basis of accounting`).
- Trong tháng 05/2021, Yearn phát sinh một-lần phí lãi suất tương đương 66&nbsp;nghìn&nbsp;$ trả cho giao thức Keep3r.
   Nó liên quan đến khoản Keep3r cho Yearn vay, gắn liền với bể thanh khoản (`liquidity pool`) KP3R/ETH mà Yearn tận dụng để trả tiền các "Quản công" (`Keeper`) cáng đáng nhiệm vụ thu hoạch những kho bạc yVault ở Yearn. Theo dự kiến, phí lãi suất này sẽ không tái phát trong tương lai.

# Số lượng cộng tác viên toàn-thời-gian đã tăng lên trong Q2, bao gồm thêm lập trình viên, kỹ sư và nhân sự vận hành.

![](/_posts/_financials/quarterly-report/2021-Q2/page10.jpg?w=635&h=253)

- Quy mô của ê-kíp cộng tác viên toàn-thời-gian đã mở rộng và giờ bao gồm 26 cá nhân.
- Thành phần hiện tại: 13 lập trình viên, 10 nhân sự vận hành cũng như một người mỗi mảng tiếp thị, thiết kế và pháp lý.
- Lương quản lý (`Administrative salary`) của Q2-21 không đến 5% tổng lợi nhuận chưa-tính-chi-phí (`gross profit`) trong cùng khoảng thời gian này.

# Coordinape phân phối phần lớn các khoản trợ cấp cho cộng đồng Yearn và là một cách mới, sáng tạo về mặt trả công phi-tập-trung.

![](/_posts/_financials/quarterly-report/2021-Q2/page11.jpg?w=787&h=411)

- Phần lớn các khoản trợ cấp cho cộng đồng Yearn được phân phối bằng chương trình Coordinape.
   Coordinape là mô hình lựa chọn và giải ngân trợ cấp theo cách phi tập trung. Trước đây, mỗi người nhận trợ cấp và cộng tác viên toàn-thời-gian được trao 100 tôken GIVE.
   Những tôken này có thể phân bổ cho bất kỳ ai đóng góp công sức vào hệ sinh thái Yearn. Cộng tác viên có lương sẽ không thể nhận trợ cấp nữa. Ngân sách Coordinape, được duyệt bởi ê-kíp yBudget, đã tăng lên trong Q2 và rơi vào khoảng 58&nbsp;nghìn&nbsp;$ mỗi tháng tính đến 06/2021.
- Redphone đã hỗ trợ truyền thông với nhiều bài viết tổng hợp cho Yearn, đặc biệt là ở mạng xã hội Twitter.
- Mỗi tháng, có hơn 50 cá nhân được hưởng trợ cấp đều đặn từ chương trình Coordinape. Do lượng người nhận lớn, chúng tôi chỉ trình bày tổng số tiền trợ cấp theo Coordinape (thay vì mỗi khoản trả công riêng lẻ) ở bảng trên (hoặc bên trái trong tệp PDF).
- Bạn có thể kiểm tra Coordinape tại đây: https://coordinape.com/

# Yearn đã tái thu xấp xỉ 81 YFI kể từ khi chương trình mua lại bắt đầu vào tháng 11/2020.

![](/_posts/_financials/quarterly-report/2021-Q2/page12.jpg?w=493&h=733)

- `YIP-55: Mua lại và Xây dựng Yearn` đã được thông qua vào tháng 11/2020. Nó thay thế mô hình phân chia lợi nhuận (qua hình thức "đặt cọc"–`staking`) bằng phương thức tái thu tôken của mình từ thị trường tự do. Lợi nhuận sau khi trang trải chi phí trước-vận-hành (`overhead cost`) được dùng để mua lại YFI rồi tích trữ trong Ngân khố (`Treasury`) của Yearn.
- Ê-kíp yBudget hoạch định ngân sách tái thu YFI hàng tháng dựa trên phân tích lợi nhuận mỗi 30 ngày. YFI tích lũy ở Ngân khố (`Treasury`) được dùng để khuyến khích cộng tác viên trong tương lai (thù lao dàn trải—`vesting`), các chương trình xuyên-giao-thức hoặc khai thác thanh khoản (`liquidity mining`) có thể xuất hiện về sau. Chúng sẽ do ê-kíp yBudget và yPeople xác định rồi sau đó hiện thực hóa bởi Ví đa-ký (`Multisig`).
- Yearn sẽ tiếp tục mua lại đồng YFI mỗi tháng bằng cách dùng lợi nhuận mà giao thức thu được, trừ khi có đề xuất quản trị YIP mới làm thay đổi chính sách này.

# Tính từ đầu năm đến tháng 06/21, những người ký gửi, quản trị cùng chiến lược gia đã nhận khoảng 69%, 22% và 8% lượng doanh thu mà yVault tạo ra.

![](/_posts/_financials/quarterly-report/2021-Q2/page13.jpg?w=806&h=662)

- Những người ký gửi bỏ túi một phần choáng ngợp doanh thu từ yVault. Kể từ lúc Yearn "khai thiên lập địa" đến giờ, họ đã kiếm được 88&nbsp;triệu&nbsp;$ trên tổng số 126&nbsp;triệu&nbsp;$ mà yVault tạo ra.
- Ngân khố (`Treasury`) đã thu về 28&nbsp;triệu&nbsp;$, còn Chiến lược gia nhận 9.1&nbsp;triệu&nbsp;$ tính từ thời điểm giao thức phát hành.
- Thu nhập của Chiến lược gia ở Năm Tài chính 2020, tháng 01 và tháng 02/2021 ở mức thấp là do cấu trúc phí cũ còn chưa tối ưu hóa. Cấu trúc phí mới tưởng thưởng cho họ một cách công bằng, tạo ra nhiều giá trị hơn trước đây. Nó đã được các chủ đồng YFI biểu quyết và duyệt thông qua ở Đề xuất Cải thiện Yearn (YIP).
- Cấu trúc hiện tại gồm 2% Phí Quản lý thu bởi cộng đồng quản trị và 20% Phí Thành quả tính trên lợi nhuận. Khoản 20% phí thành quả được chia đều giữa các chiến lược gia và cộng đồng quản trị.
- _Chú ý: Dữ liệu về phí của chiến lược gia tại đây hiện không được phản ánh ở giải trình thu nhập (`income statement`) đã trình bày trước đó. Tuy nhiên, chúng tôi đang trong quá trình báo cáo lại lịch sử giải trình thu nhập để tính cả khoản phí của chiến lược gia; lãi ròng (`net earning`) không bị ảnh hưởng vì tổng lợi nhuận chưa-tính-chi-phí (`gross revenue`) sẽ tăng tương đương. Báo cáo ở quý tiếp theo sẽ bao gồm khoản phí của chiến lược gia trong giải trình thu nhập (`income statement`)._

# Yearn sở hữu khối tài sản khoảng 151&nbsp;triệu&nbsp;$ trong Ngân khố (`Treasury`), và không có nợ ròng—`net debt` (nợ chưa thanh toán trừ tiền mặt) tính đến tháng 06/2021.

![](/_posts/_financials/quarterly-report/2021-Q2/page14.jpg?w=794&h=627)

- **Tiền mặt & tương đương tiền mặt (`Cash & cash equivalents`)** –Phí quản lý và phí thành quả nợ giao thức Yearn được gửi vào Ngân khố (`Treasury`) Yearn dưới dạng tôken cấp thanh khoản (`liquidity provider token` hay "LP") của yVault. Theo thời gian, Ngân khố (`Treasury`) Yearn tự nhiên tích lũy một lượng dự trữ các tôken này khi yVault tiếp tục tạo thêm doanh thu cho giao thức.
- **Các khoản phải thu (`Accounts receivable`)** –Đại diện cho lợi nhuận kiếm được nhưng chưa "thu hoạch", tạo ra từ việc dùng Ngân khố (`Treasury`) Yearn để "canh tác" lãi suất. Vào tháng 06/2021, Yearn hiện thực hóa mọi lợi nhuận (đã kiếm được mà chưa thu hoạch) liên quan đến những hoạt động này, đó là lý do tại sao không có số liệu ở đây.
- **Tồn kho (`Inventory`)** –Ban "canh tác" hoa lợi nội bộ của Yearn bắt đầu thu lời trên tài sản giữ trong Ngân khố (`Treasury`). Những khoản này là hạn mức tín dụng vay được từ MakerDAO hoặc Unit.xyz để thực hiện việc "gặt" lãi suất. Tất cả số nợ đã được trả hết vào tháng 06/2021, đó là lý do không có khoản tồn kho.
- **Chi phí trả trước & tiền đặt cọc (`Prepaid expenses & security deposits`)** –Chi phí cơ sở hạ tầng trả trước chủ yếu cho Alchemy.
   Tiền đặt cọc liên quan đến thỏa thuận dịch vụ Alchemy.
- **Các tài sản ngắn hạn khác (`Other short term assets`)** –Lợi nhuận từ hàng loạt yVault như yvCurve-LINK hay yvCurve-Tricrypto. Phần lớn số dư vào tháng 06/2021 liên quan đến kho bạc yvCurve-LINK.
- **YFI** –Ngân khố (`Treasury`) sở hữu YFI từ cả lượng tạo thêm ở tháng 02/21, thể theo YIP-52, và chính sách mua lại YFI bằng thu nhập của giao thức. Tính đến tháng 06/2021, Ngân khố Yearn nắm khoảng 4047 YFI. Số dư này được để dành cho cộng tác viên trong tương lai, các chương trình xuyên-giao-thức hoặc khai thác thanh khoản (`liquidity mining`) có thể xuất hiện về sau.
- **Các tài sản dài hạn khác (`Other long term assets`)** –Bao gồm bể thanh khoản (`liquidity pool`) KP3R/ETH nhằm tạo tín dụng cần có để chi trả cho những "Quản công" (`Keeper`) làm nhiệm vụ thu hoạch nhiều kho bạc yVault của Yearn. Giá thị trường, kể cả bất cứ khoản lỗ tạm thời (`impermanent loss`) nào, của bể thanh khoản (`liquidity pool`) này được lấy từ apy.vision vào cuối mỗi tháng.

# Bảng Quyết toán (`Balance Sheet`) – tiếp.

![](/_posts/_financials/quarterly-report/2021-Q2/page14.jpg?w=794&h=627)

- **Các khoản phải trả & chi phí cần thanh toán (`Accounts payable & accrued expenses`)** –Các khoản phải trả cho những bên cung cấp dịch vụ hoặc đối tác liên kết. Số dư này tăng lên trong tháng 04 và 05 phần lớn là do sự tồn đọng của những lượng cần thanh toán nhưng chưa trả cho đối tác. Nó đã giảm đi vào tháng 06/2021 khi nhiều khoản nợ lớn được xóa xong. Các đối tác thường được trả đầy đủ trong 30 ngày sau. Chi phí tồn đọng chủ yếu là lương hoặc trợ cấp chưa trả, được phân bổ cho những bên tương ứng dần dần.
- **Lãi phải trả (`Interest payable`)** –Tiền lãi tồn động nhưng chưa trả liên quan đến nợ của hoạt động "gặt" hoa lợi bằng Ngân khố (`Treasury`) đã mô tả ở phần trước. Tiền lãi được tổng hợp lại theo như cơ sở kế toán dồn tích (`accrual basis of accounting`).
- **Nợ dài hạn (`Long term liabilities`)** –Nợ đối với MakerDAO và Unit.xyz liên quan đến hoạt động "gặt" hoa lợi bằng Ngân khố (`Treasury`). Nợ đối với giao thức Unit&nbsp;Protocol đã được trả hết hoàn toàn vào tháng 06/2021.
- **Cổ phần (`Equity`)** –Bao gồm thu nhập tổng hợp tích lũy khác liên quan đến việc định giá tài sản nắm giữ trong bảng quyết toán (`balance sheet`) của Yearn so với giá thị trường hợp lý (`fair market value` hay FMV) vào cuối tháng.

# Yearn có đủ tiền mặt để trả hết mọi khoản nợ đang mắc ở những giao thức cho vay phi tập trung.

![](/_posts/_financials/quarterly-report/2021-Q2/page16.jpg?w=481&h=127)

- Người dùng kho bạc v1 đã gặp phải vấn đề không hay đầu Q1 gây thất thoát 11&nbsp;triệu&nbsp;$.
   Yearn đã đền bù và hoàn tiền cho họ bằng khoản vay từ MakerDAO. Toàn bộ khoản vay liên quan đến sự cố này đã được trả hết từ thu nhập của giao thức.
- Yearn vẫn còn một số khoản nợ khác chưa thanh toán cho MakerDAO, nhưng có đủ tiền mặt để trả hết bất cứ lúc nào.
- Hình phía trên (bên trái trong tệp PDF) hiển thị dữ liệu tính đến ngày phát hành báo cáo này và không phản ánh số dư cuối tháng 06/2021 (kết thúc Q2).

# _Tổng Giá trị Ký gửi (TVL) của Yearn vượt mốc 5.0&nbsp;tỷ&nbsp;$ trong tháng 06_, và hiện ở mức 4.621&nbsp;tỷ&nbsp;$ tính đến 19/08/2021

![](/_posts/_financials/quarterly-report/2021-Q2/page17.jpg?w=792&h=670)

- Dọc khắp mọi sản phẩm của Yearn chứng kiến sự tăng trưởng phi mã về Tổng Giá trị Ký gửi (`Total Value Locked` hay TVL) trong Q1&nbsp;2021 và tiếp tục sang Q2&nbsp;2021. Ở tháng 06, TVL đạt mức cao nhất với 5.0&nbsp;tỷ&nbsp;$, giảm nhẹ một chút trong tháng 07 nhưng đã tăng trở lại vào tháng 08. ,
- Phần lớn TVL bắt nguồn từ dòng sản phẩm yVault v2. Vào cuối tháng 05 và xuyên suốt tháng 06, chúng tôi đã chuyển một lượng lớn kho bạc v1 sang v2. Phiên bản v1 không còn được hỗ trợ nữa. Mọi người ký gửi được khuyên chuyển sang v2.
- Iron&nbsp;Bank là nền tảng cho vay nội bộ của Yearn cùng sự hợp tác với C.R.E.A.M.&nbsp;Finance. Chúng tôi tiếp tục ghi nhận sự tăng trưởng về TVL của Iron&nbsp;Bank từ Q1 sang Q2.
- Điều đáng chú ý là tính đến 19/08/2021, **Yearn có hơn 4.6&nbsp;tỷ&nbsp;$ TVL mà chưa hề áp dụng bất kỳ tôken phụ cấp** hay hình thức khuyến khích nào thường thấy ở những giao thức cạnh tranh trong DeFi.
- _Chú ý: Biểu đồ phía trên (bên trái trong tệp PDF) hiển thị dữ liệu tính đến 19/08/2021._
- Nguồn: Github: [yearn/yearn-exporter](https://github.com/yearn/yearn-exporter)

# Chúng tôi đang tiếp tục cải thiện bảng đo tài chính của mình để hiển thị các giao dịch, Giải trình Thu nhập (`Income Statement`) và Bảng Quyết toán (`Balance Sheet`).

![](/_posts/_financials/quarterly-report/2021-Q2/page18.jpg?w=810&h=460)

- Bảng đo tài chính của chúng tôi hoàn toàn công khai, giúp mọi thành viên cộng đồng có cái nhìn chi tiết hơn về những giao dịch liên quan đến mọi hoạt động ở Yearn. Bạn có thể xem sao kê giao dịch theo tháng, tôken, danh mục cùng nhiều thể loại khác bằng bộ lọc tương ứng.
- Xin vui lòng chú ý rằng bảng đo này hiển thị kế toán theo cơ sở tiền mặt (`cash-basis`), trong khi giải trình kinh tế ở những phần trước dựa trên cơ sở kế toán dồn tích (`accrual basis of accounting`).
   Đặc biệt, bảng đo không tính Các khoản phải thu (`accounts receivable`), Lãi phải trả (`accrued interest`), Lời & lỗ vốn chưa hiện thực hóa (`unrealized capital gains & losses`), hoặc những khoản trên cơ sở tích lũy khác.
- Bảng đo tài chính cũng chưa được kiểm định toàn diện bởi một tổ chức kiểm toán bên-thứ-ba và chỉ nhằm mục đích trình bày thông tin. Nó không phải lời tư vấn tài chính, đầu tư dưới bất kỳ hình thức nào.
- Bạn có thể truy cập bảng đo nói trên tại https://www.yfistats.com/financials/financials.html

# Nguồn

- Dữ liệu doanh thu được lấy từ giao dịch tôken giữa nhiều địa chỉ ví mà giao thức Yearn sở hữu. Các địa chỉ Ethereum này được liệt kê dưới đây.

   - Kho bạc Ngân khố (`Treasury vault`): 0x93a62da5a14c80f265dabc077fcee437b1a0efde
   - Ví đa-ký (`Multi-sig`): 0xfeb4acf3df3cdea7399794d0869ef76a6efaff
   - Cọc quản trị (`Governance staking`): 0xba37b002abafdd8e89a1995da52740bbc013d

- Chi phí được lấy từ báo cáo kiểm toán yChad. Các báo cáo này được công khai trên GitHub của Yearn và đăng tải hàng tháng.

   - https://github.com/iearn-finance/ychad-audit/tree/master/reports/financial

- Giá trị tôken được lấy từ Coingecko, một bên cung cấp lịch sử giá cho mọi loại tiền mã thuật số (`cryptocurrency`) lớn, hoặc bằng cách chạy "nút lưu trữ" (`archive node`) Ethereum và truy vấn trực tiếp từ chuỗi khối (`blockchain`) này.

- Xin vui lòng liên hệ với ê-kíp chúng tôi qua Telegram hay Discord nếu có bất cứ thắc mắc cụ thể nào.
   - t.me/yearnfinance
   - https://discord.com/yearn
