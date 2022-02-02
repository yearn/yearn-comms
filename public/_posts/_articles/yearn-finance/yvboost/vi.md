---
title:  "Thêm hệ số kích, lãi kép và mô-hi-tô cho bạn với yvBOOST"
image:
  src: ./cover.png
  width: 1050
  height: 543
date: '2021-09-14'
author: Qosmonot
translator: 🤖💵💵💰💰.eth
---

# Thêm hệ số kích, lãi kép và mô-hi-tô cho bạn với yvBOOST

### Quan hệ hợp tác với [Curve.fi](http://curve.fi/) đóng vai trò then chốt trong cơ sở hạ tầng của Yearn, cũng như giúp người dùng nâng cao hệ số kích (`boost`) cho chính mình.

🔵🤝🌈

_Bài viết được biên tập bởi cộng tác viên [_qosmonot_](http://twitter.com/qosmonot) cho Yearn_

Nhiều kho bạc Yearn dùng chiến lược dựa trên các bể góp vốn của Curve (`Curve pool`). Do đó, chúng sử dụng tôken CRV để tối ưu hóa hoa lợi bằng cách biểu quyết, định hướng phân bổ phần thưởng vào bể vốn tương ứng. Yearn đã và đang tích lũy khối tôken CRV nhằm tăng cường phần thưởng cho Kho bạc (`Vault`) của chính mình.

![](image1.png?w=1050&h=651)

Bất cứ ai cũng có thể hưởng lợi từ việc trên bằng cách "cọc" (`stake`) tôken CRV của mình qua Yearn. Hãy cùng điểm qua những ưu thế mà Yearn có thể giúp bạn tăng lượng CRV cho bản thân với cơ chế kích thưởng!

## CRV là gì?

CRV là tôken quản trị và nhiều tiện ích của CurveĐAO, tổ chức phi tập trung vận hành giao thức [Curve.fi](http://curve.fi/). Mục đích chính của tôken CRV là khuyến khích những bên cấp thanh khoản (`liquidity provider`) trên nền tảng [Curve.fi](http://curve.fi/) cũng như thu hút nhiều người nhất có thể vào tham gia quản trị giao thức. Tôken CRV có ba chức năng: Đặt cọc, Kích thưởng và Biểu quyết. Để sở hữu ba chức năng này, người dùng phải "bỏ phiếu khóa-giam" (`vote lock`) đồng CRV của mình đổi lấy veCRV. veCRV là viết tắt của `vote-escrowed CRV` (tạm dịch: "CRV phiếu bầu đã ký quỹ" hay "phiếu bầu ký quỹ CRV"), đại diện cho lượng CRV được khóa/giam trong một khoảng thời gian (bất kỳ, từ 1 tuần đến 4 năm).

### Đặt cọc (`Staking`)

veCRV (CRV đã cọc, hay thường gọi là `staked` trong tiếng Anh) được chia sẻ 50% tổng phí giao dịch (một nguồn doanh thu) của giao thức Curve. Khoản phí thu về đó được dùng để mua 3CRV, tôken cấp thanh khoản (`LP token`) của bể góp vốn TriPool (DAI+USDC+USDT), rồi sau đó phân phát cho những ai nắm giữ veCRV.

### Kích thưởng (`Boosting`)

Ngoài đặt cọc, một nhu cầu CRV lớn khác là khả năng kích thưởng cho số thanh khoản đã cung cấp. Phiếu bầu ký quỹ CRV cho bạn quyền biểu quyết tham dự ĐAO và định hướng phân bổ phần thưởng (đồng CRV) vào bể góp vốn mong muốn, mang lại hệ số kích lên đến 2.5x trên lượng thanh khoản cung cấp.

### Biểu quyết (`Voting`)

Sau khi các chủ sở hữu "bỏ phiếu khóa-giam" đồng CRV của mình và chuyển chúng thành veCRV, họ có thể tham gia biểu quyết hàng loạt các đề xuất ở ĐAO này, thay đổi tham số cho bể góp vốn được nêu, cũng như đặt ra các thay đổi theo ý riêng.

Tuy nhiên, cần lưu ý rằng veCRV về cơ bản không thể chuyển nhượng được, và cách duy nhất để sở hữu chúng là "bỏ phiếu khóa-giam" đồng CRV.

Bạn có thể đặt cọc (`stake`) CRV trên [Curve.fi](http://curve.fi/) và chủ động tự chỉnh hệ số kích cho các Bể Thanh khoản (`Liquidity Pool`), hoặc hãy để Yearn thay mặt cáng đáng công việc nhàm chán đó bằng những kho bạc (`vault`) chuyên dụng của chúng tôi: yveCRV và yvBOOST. Thêm vào đó, các tôken yVault hoàn toàn tự do giao dịch và chuyển nhượng, không bị bó buộc như khi cọc CRV ở [Curve.fi](http://curve.fi/).

## Kho bạc yveCRV

![](image2.png?w=128&h=128)

### Thu nhập CRV với hệ số kích lớn hơn

Khi ký gửi CRV vào kho bạc (`vault`) này, lượng CRV đó sẽ được đem khóa trên giao thức [Curve.fi](http://curve.fi/) như veCRV, còn người dùng nhận lại phiên bản tôken hóa của veCRV có tên yveCRV. Kho bạc yveCRV giúp bạn liên tục thu về phần chia sẻ phí giao dịch (một nguồn doanh thu) của Curve. Hàng tuần, những phần thưởng nói trên có thể lấy (`claim`) được dưới dạng 3Crv (tôken LP bể 3pool của Curve).

Bạn có thể trực tiếp tự mình làm điều đó qua [Curve.fi](http://curve.fi/), nhưng một lý do rất lớn để chọn sử dụng kho bạc yveCRV: **Lời nhiều hơn!**

Hơn bao nhiêu? Phần thưởng của bạn qua kho bạc (`vault`) này nhiều gấp đôi trở lên! Yearn đạt được điều này là do định kỳ quyên góp 10% lượng CRV đã "cày" từ mọi chiến lược dựa trên [Curve.fi](http://curve.fi/) cho kho bạc yveCRV, giúp những ai ký gửi vào kho yveCRV lấy (`claim`) phần chia của Yearn đối với lượng phí sử dụng Curve. Nói cách khác, chúng tôi trao tất cả phần thưởng của Yearn (đáng ra có thể giữ lại riêng cho giao thức) cho người dùng kho yveCRV, từ đó tăng thêm lợi nhuận hàng tuần.

Khóa tôken CRV vào kho bạc (`vault`) này đồng nghĩa với việc bạn ủy thác quyền biểu quyết trên [Curve.fi](http://curve.fi/) cho Yearn. Yearn liên tục chạy các trình mô phỏng để tối ưu hóa việc phân bổ số phiếu bầu, giúp tăng tối đa hoa lợi ở tất cả mọi kho bạc (`vault`), gián tiếp thêm lời cho khoản ký gửi của bạn tại những kho khác. 

**Lúc này, người dùng chỉ việc lấy phần thưởng rồi nhâm nhi mô-hi-tô, tận hưởng cuộc sống dư dả.** Tất nhiên, một phương án khác là đem tiền lãi gửi tiếp vào kho bạc (`vault`) để cộng dồn khoản lời, và nút "Cọc tiếp" (`Restake`) sẽ giúp làm điều đó. Bạn cũng có thể thực hiện bước này một cách thủ công, nhưng Yearn một lần nữa sẽ tự động hóa với…

## Kho bạc yvBOOST

![](image3.png?w=128&h=128)

### Thu nhập CRV đã kích thưởng với lãi kép

Kho bạc yvBOOST là phiên bản hoàn toàn tự động và cộng dồn lãi kép của kho yveCRV vừa giải thích phần trước.

Nói đơn giản, kho này tự động lấy phần thưởng 3CRV hàng tuần của bạn rồi dùng chúng để tăng lượng yveCRV bằng cách mua theo lệnh-thị-trường (`market-buy`) hoặc tạo thêm (`mint`) tùy theo phương án nào hiệu quả nhất tại thời điểm "thu hoạch" (`harvest`).

Sau khi gửi vào, tương tự như kho bạc yveCRV, quyền biểu quyết từ số tôken CRV đó sẽ do Yearn quản lý và tối ưu hóa. Bạn không còn phải bận tâm lấy (`claim`) phần chia sẻ doanh thu (từ phí sử dụng) giao thức [Curve.fi](http://curve.fi/) một cách thủ công mỗi tuần nữa, kho bạc (`vault`) này sẽ cáng đáng hết!

Đây là kho "vào-rồi-khỏi-lo" giúp tăng lượng tôken CRV theo cấp số nhân, tận dụng tối đa sức mạnh lãi suất kép!

Đến đây, bạn có lẽ đang thắc mắc làm sao để hiện thực hóa bất kỳ khoản lời nào từ lượng tôken CRV của mình trong kho, nếu như (theo đề cập từ đầu tới giờ) mọi CRV ký gửi vào kho yveCRV hay yvBOOST đều bị khóa/giam. Đúng là không rút được đồng CRV gốc khỏi kho yveCRV, nhưng bạn có thể bán-đổi (`swap`) cả hai tôken kho bạc (`vault token`) này trên sàn Sushiswap. Đó là bởi Yearn và người dùng tương ứng đều cung cấp thanh khoản (`liquidity`) trên Sushiswap, cho phép bạn bán-đổi (`swap`) tôken yveCRV cũng như yvBOOST lấy ETH (hoặc bất cứ đồng tiền nào khác, chẳng có giới hạn nào ở đây).

### Một chút "bật mí", hay `alpha` trong tiếng lóng của cộng đồng tiền mã thuật số (`crypto`).

Yearn mua yvBOOST từ thị trường tự do, "mở gói" (`unwrap`) chúng thành yveCRV rồi đóng góp số yveCRV này vào lại kho yvBOOST, làm tăng giá trị tài-sản-nền của yvBOOST.

## Kho bạc Yearn (`yVault`) cho những người "cọc" CRV

Trực tiếp đặt cọc (`staking`) CRV của bạn qua nền tảng [Curve.fi](http://curve.fi/) đồng nghĩa với việc khóa/giam chúng thành tôken veCRV (không-chuyển-nhượng-được), cho phép lấy (`claim`) phần chia sẻ doanh thu (từ phí sử dụng) giao thức (dưới dạng đồng 3CRV). Bạn có thể dùng tôken veCRV này để tự tay tái phân bổ phiếu bầu của mình nhằm kích thưởng cho bản thân lượng thanh khoản (`liquidity`) đã cung cấp trên [Curve.fi](http://curve.fi/).

## Tự động hóa mọi thứ với kho bạc yveCRV và yveBOOST của Yearn

Cả hai kho này đều thưởng cho "cọc viên" CRV phần chia sẻ từ lượng CRV do Yearn khóa, biến chúng thành điểm đến lý tưởng cho những ai muốn đặt cọc CRV mà vẫn có thể dễ dàng chuyển dịch vốn (tự do thanh khoản):

- Nhận phần chia sẻ doanh thu (từ phí sử dụng) giao thức [Curve.fi](http://curve.fi/) (3CRV), tự động tái đầu tư (với kho yvBOOST).
- Nhận phần chia sẻ doanh thu (từ phí sử dụng) giao thức [Curve.fi](http://curve.fi/) của Yearn, bên cạnh tiền thưởng của riêng bạn (thêm nhiều 3CRV hơn nữa!), tự động tái đầu tư (với kho yvBOOST).
- Sức mạnh từ tổng số phiếu bầu của các tôken veCRV được tự động tối ưu hóa và tái phân bổ nhằm tăng tối đa phần thưởng cho mọi kho Yearn vận dụng bể góp vốn của Curve (`Yearn's Curve Pool`).
- Nhận tôken yveCRV hoặc yvBOOST cho lượng CRV ký gửi, giúp bạn dễ dàng hiện thực hóa lợi nhuận hoặc rút khỏi vị trí "cọc" CRV của mình.

Lợi ích mà Yearn cung cấp qua việc tự động hóa quá trình tạo hoa lợi và tái phân bổ tài sản mã thuật số (`crypto`) cho người dùng đặc biệt ấn tượng với trường hợp nắm giữ CRV. Kho yveCRV hay yvBOOST là ứng dụng mạnh mẽ, lãi kép, "vào-rồi-khỏi-lo" để gửi gắm CRV của bạn!

Trong bài tiếp theo, chúng tôi sẽ đề cập đến keepCRV và các quy trình để "lót tay" (`bribe`) cũng như EPS. Hôm nay đến đây là hết…

![](image4.png?w=1050&h=543)
