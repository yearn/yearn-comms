---
title:  "Yearn Finance và Rô-bốt Tiền"
image:
  src: ./cover.png
  width: 1281
  height: 721
date: '2021-03-25'
author: Gemini/Cryptopedia
translator: 🤖💵💵💰💰.eth
---

Ấn bản gốc: [https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol](https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol)

# Yearn Finance và Rô-bốt Tiền: Tự động hóa Chiến lược ĐeFi

Yearn Finance mang lại một bộ các chiến lược đầu tư do rô-bốt vận hành bằng “trí tuệ đám đông” — cộng đồng riêng của Yearn.

![](image1.png?w=1281&h=721)

## Tóm tắt

Rô-bốt tiền của Yearn Finance vận hành các chiến lược đầu tư dọc khắp những nền tảng tài chính phi tập trung (ĐeFi) với mục tiêu tạo ra lợi nhuận tối ưu mà đỡ rủi ro nhất. Chiến lược triển khai bao gồm đem tài sản cho vay, kiếm tôken từ dự án "gặt hoa lợi" (`yield farming`), cấp thanh khoản, hoặc tổ hợp nhiều tác vụ và các khả năng đầu tư khác dọc khắp hàng loạt giao thức cho vay ĐeFi. Giao thức Yearn giúp bạn dễ dàng tham gia nhiều chiến lược đầu tư phức tạp bằng cách cấp tôken cho nền tảng. Nó mở rộng bộ sản phẩm nhằm đơn giản hóa việc đầu tư trong ĐeFi và đang thu hút sự chú ý với các nhà đầu tư.

## Nội dung

- Yearn.Finance: Kho bạc (`yVault`)
- Nghiên cứu Điển hình Kho bạc yVault: GUSD
- Một Bộ Sản phẩm ĐeFi
- Trí tuệ của Đám đông

Yearn Finance phát triển các sản phẩm tự động hóa (có thu phí) nhằm đơn giản bớt sự phức tạp của tài chính phi tập trung (ĐeFi) với “rô-bốt tiền” làm việc để tăng tối đa lợi nhuận. Yearn bắt đầu với chỉ một nhà lập trình [Ethereum](https://www.gemini.com/cryptopedia/ethereum-smart-contracts-tokens-use-cases) — [Andre Cronje](https://www.gemini.com/cryptopedia/glossary#andre-cronje) — người tìm cách tự động hóa và tối ưu lợi nhuận từ ĐeFi cho bản thân. Nó giờ đã phát triển thành một trong những cộng đồng sôi động và phi tập trung nhất trên Ethereum với trọng tâm phát triển các cách tinh vi để mang lại lợi nhuận.

"Rô-bốt tiền" để chỉ những chiến lược giao dịch tự động mà Yearn thực hiện dọc khắp các nền tảng ĐeFi trên Ethereum. Vô số chiến lược đầu tư có thể được triển khai xuyên suốt nhiều giao thức ĐeFi, với số lượng ngày càng tăng. Chẳng hạn, một rô-bốt tiền của Yearn có thể kiếm phí giao dịch trên [giao thức Curve](https://www.gemini.com/cryptopedia/curve-crypto-automated-market-maker), vay tiền bằng cách dùng chức năng [vay–trả giây lát (`flash loan`) của Aave](https://www.gemini.com/cryptopedia/aave-flashloans), và cho vay tài sản ở [Compound](https://www.gemini.com/cryptopedia/compound-finance-defi-crypto).

## Yearn.Finance: Kho bạc (`yVault`)

Sản phẩm phổ biến nhất trong hệ sinh thái Yearn là [Kho bạc (`yVault`)](https://www.gemini.com/cryptopedia/glossary#y-vaults), một chuỗi các bể góp vốn tôken tuân theo chiến lược đầu tư được phân bổ dọc khắp nhiều nền tảng ĐeFi. Ký gửi tôken vào một Kho bạc (`yVault`) tự động tạo ra [yTôken](https://www.gemini.com/cryptopedia/glossary#y-tokens) mới, vốn là một dạng [tôken cấp thanh khoản (viết tắt là `LP`)](https://www.gemini.com/cryptopedia/liquidity-provider-amm-tokens). Tôken LP tự động được tạo ra khi người dùng ký gửi vào [bể thanh khoản](https://www.gemini.com/cryptopedia/glossary#liquidity-pool) — nó như hóa đơn hay biên lai đánh dấu quyền sở hữu đối với tài sản nền ở bể góp vốn. Mỗi yTôken có thể được dùng để chuộc lại tôken ký gửi ban đầu bất cứ lúc nào, cộng với mọi phần thưởng đã tích lũy trong khi tôken hoạt động trong Kho bạc `yVault`.

Ví dụ, bạn có thể ký gửi [GUSD](https://www.gemini.com/cryptopedia/gusd-gemini-dollar-stablecoin-features) vào kho bạc GUSD và nhận lại tôken LP có tên yGUSD. Khi quy đổi yGUSD lấy lại GUSD nền, bạn nhận được số GUSD gốc cùng với mọi khoản lời hoặc phần thưởng mà lượng GUSD đó đã tích lũy từ việc sử dụng chiến lược của Kho bạc `yVault` này. Các kho bạc của Yearn "nén" nhiều lớp ứng dụng cũng như thành phần ĐeFi phức tạp thành một chiến lược giao dịch súc tích để nhà đầu tư cấp tài sản và nắm giữ tôken, tham gia thu lời một cách tinh vi, theo thuật toán.

## Nghiên cứu Điển hình Kho bạc yVault: GUSD

Các chiến lược Kho bạc `yVault` uyển chuyển, trơn tru, và cộng đồng Yearn có thể quyết định thay đổi hay điều chỉnh chiến lược khi nó bắt đầu sinh lời kém. Trong chiến lược yGUSD ở tháng 10/2020 — vốn đã được thay đổi và tối ưu hóa rồi — chiến lược thu hoa lợi cho chủ sở hữu yGUSD qua các bước sau:

1. GUSD được ký gửi vào một bể góp vốn Curve bao gồm [tiền bình giá (`stable coin`)](https://www.gemini.com/cryptopedia/what-are-stablecoins-how-do-they-work) GUSD, [DAI](https://www.gemini.com/cryptopedia/dai-stablecoin-what-is-dai-token), USDC và USDT để thu phí (mà các thương gia phải trả khi giao dịch).
2. Tôken LP tạo từ bể tiền bình giá được cọc vào Curve để kiếm [tôken CRV](https://www.gemini.com/cryptopedia/glossary#crv-token).
3. 90% tôken CRV thu về được bán đi để lấy DAI.
4. DAI được ký gửi trở lại vào bể tiền bình giá GUSD, DAI, USDC, USDT để kiếm thêm phí giao dịch.

Từ phía người dùng, các bước trên diễn ra ngầm theo thuật toán lập trình. Bản thân chiến lược GUSD này khá đơn giản khi so với những Kho bạc `yVault` khác có nhiều chiến lược tinh vi hơn, có thể bao gồm việc vay tiền, vận dụng [đòn bẩy tài chính](https://www.gemini.com/cryptopedia/glossary#leverage) và duy trì sự tiếp xúc với tình hình thị trường.

Ví dụ như kho bạc yETH, vốn đang ở giai đoạn thử nghiệm và chưa phát hành chính thức tính đến tháng 12/2020, sử dụng cả hai giao thức [MakerDAO](https://www.gemini.com/cryptopedia/makerdao-defi-mkr-dai-coins) và Curve trong chiến lược của nó. Với chiến lược yETH, chủ sở hữu ETH tiếp tục duy trì sự tiếp xúc với biến động giá (tăng hay giảm) của ETH trong khi liên tục thu về lãi suất qua các bước sau:

1. ETH được ký gửi vào MakerDAO làm tài sản thế chấp.
2. Lượng ETH thế chấp đó dùng để vay DAI từ MakerDAO.
3. DAI vay được sẽ ký gửi vào kho bạc yDAI.
4. Kho bạc DAI ký gửi DAI vào Curve để kiếm phí giao dịch.
5. Tôken LP lấy từ bể góp vốn DAI được cọc vào Curve để thu về tôken CRV.
6. Tôken CRV được bán lấy ETH.
7. ETH lời sẽ tiếp tục ký gửi vào MakerDAO làm thế chấp.

Do kho bạc yETH vay DAI từ MakerDAO, rủi ro ETH bị thanh lý là hiện hữu — hoặc lỡ để rô-bốt tiền bán ETH của mình nhằm trả khoản vay DAI. Tiến trình thanh lý xảy ra khi giá trị của số ETH thế chấp giảm xuống dưới ngưỡng 150% tối thiểu so với lượng DAI đã vay. Để tránh bị thanh lý, rô-bốt tiền yETH luôn đặt mục tiêu giữ giá trị ETH thế chấp ở mức an toàn 200% so với giá trị khoản nợ DAI. Nếu giá trị của ETH thế chấp bắt đầu giảm xuống dưới mục tiêu 200%, rô-bốt tiền sẽ tự động thanh toán một phần khoản nợ DAI để giữ mức thế chấp cao. Quản lý nợ, thế chấp và thanh lý là những thứ tạo nên một lớp ứng dụng tinh vi nữa cho các kho bạc của Yearn.

Điều quan trọng cần lưu ý ở đây là chiến lược yVault càng phức tạp, rủi ro càng cộng dồn vì dựa trên nhiều giao thức và nền tảng hơn. Chiến lược như ví dụ yETH cũng có rủi ro cố hữu gắn liền với đòn bẩy tài chính, thanh lý và lỗi hỏng hợp đồng thông minh (`smart contract`).

## Một Bộ Sản phẩm ĐeFi

Bộ sản phẩm của Yearn là những ứng dụng ĐeFi không ngừng mở rộng và phát triển. Bên cạnh hàng loạt chiến lược yVault, Yearn còn nhiều sản phẩm được ưa chuộng khác, hợp thành hệ sinh thái của riêng mình.

Một trong số chúng là ứng dụng yEarn–tập trung vào việc sử dụng tiền bình giá như DAI ở các bể vốn cho vay lãi suất cao tại Compound hoặc Aave. Một sản phẩm khác, Zap, được thiết kế giúp giảm chi phí giao dịch trên Ethereum bằng cách tổ hợp hàng loạt giao dịch thường làm thủ công thành một giao dịch phức tạp hơn nhưng chỉ với một cú click. Tính năng yInsure cung cấp bảo hiểm cho hợp đồng thông minh (`smart contract`) như biện pháp bảo vệ trong trường hợp bị lợi dụng khai thác kẽ hở hoặc lỗi mã lập trình.

Còn rất nhiều sản phẩm khác hiện đang trong giai đoạn nghiên cứu và phát triển, chẳng hạn như yTrade để giao dịch có đòn bẩy, yLiquidate nhằm tự động hóa việc thanh lý, hay yBorrow cho vay mượn. Yearn do đó đã chứng tỏ hệ sinh thái của mình là nơi "đất lành chim đậu" để nghiên cứu, phát triển, và các sản phẩm Yearn không có lý do gì không tiếp tục mở rộng khi thế giới ĐeFi ngày càng hoàn thiện.

## Trí tuệ của Đám đông

Rô-bốt tiền của Yearn vận hành một kế hoạch đầu tư chiến lược cho tài sản mã thuật số: Cách phân bổ chúng, ở đâu, khi nào di chuyển và khi nào bán chúng. Trên thực tế, ai cũng có thể soạn ra chiến lược mới bằng cách đăng tải lên diễn đàn quản trị của Yearn, giải thích lôgic và lợi nhuận tiềm năng cho cộng đồng hiểu. Nếu được cộng đồng duyệt thông qua, chiến lược sẽ đi vào triển khai, người tạo chiến lược thu về chi phí sử dụng — lấy từ thành quả thật của chiến lược.

Dù thế giới ĐeFi có rất nhiều cơ chế thuật toán và tự động hóa dọc khắp hàng loạt nền tảng, các chiến lược rô-bốt tiền của Yearn được tạo ra cũng như chịu ảnh hưởng bởi thành viên cộng đồng. Sự quản lý của cộng đồng Yearn, sự kiện “[phát hành công bằng](https://www.gemini.com/cryptopedia/what-is-yearn-finance-yfi-coin-yearnfinance)” [tôken quản trị nền tảng YFI với số lượng hữu hạn](https://www.gemini.com/cryptopedia/glossary#yfi-token), cùng với bản chất hợp tác tự nhiên là một lời nhắc quan trọng về sự khéo léo, hiệu quả của con người ngay cả trong thời đại thuật toán tự động hóa. Với Yearn, ý tưởng có thể đến từ bất cứ đâu và trí tuệ bắt nguồn ở đám đông. Sự hiệu quả của trí tuệ đó liên tục được thử thách, tôi luyện, cải thiện theo thời gian thực bằng tiền thật.

Yearn Finance đại diện cho một lớp giá trị độc đáo, tương tác liên hệ thống và sức mạnh đám đông trong ĐeFi. Nó là một thử nghiệm đầu tư, phát triển sản phẩm tự động hóa có động cơ mục đích hài hòa, tích cực, thống nhất để phối hợp với nhau. Đồng thời, đây cũng là thử nghiệm xem một cộng đồng phi tập trung, mục tiêu đại thể về tối ưu hóa lợi nhuận, có làm được điều đó một cách hiệu quả mà không xảy ra xung đột nội bộ tổ chức hay không. Trong khi nhiều nền tảng ĐeFi tập trung loại bỏ các bên đối tác, thực thể và hệ thống trung gian lạc hậu, phát minh của Yearn lại là cầu nối giữa cộng đồng phi tập trung với những nền tảng cô lập, đem lại lợi ích cho người dùng của mình.
