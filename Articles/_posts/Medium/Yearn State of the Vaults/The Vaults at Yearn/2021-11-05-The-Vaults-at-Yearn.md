---
layout: post
title:  "Các Kho bạc (`Vault`) tại Yearn"
categories: [ Articles ]
image: ./The-Vaults-at-Yearn/header.gif
author: Yearn
translator: 🤖💵💵💰💰.eth
publish: true
---

# Các Kho bạc (`Vault`) tại Yearn

Cập nhật ngày 05/11/2021

![](header.gif)

# Tổng quan

Chào mừng đến với các Kho bạc (`Vault`) tại Yearn, nơi bạn có thể tìm thấy thông tin chuyên sâu về nguyên lý hoạt động của yVault và những tác vụ (chiến lược—`strategy`) mà chúng thực hiện. Bài viết này tổng hợp mô tả của mọi yVault để mang lại sự thuận tiện tối đa cho những ai quan tâm. Tất cả kho bạc phiên bản v1 đã lỗi thời, không còn hoạt động nữa và được thay thế chính thức bằng yVault v2. Các yVault và chiến lược mới nhất được đánh dấu ✨.

Dưới đây, bạn sẽ tìm thấy 7 phần:

## Kho bạc Ethereum

* Yearn và Curve 🔵🤝🌈
* Các kho bạc 🏛️
* Kho bạc dựa trên Curve&nbsp;Finance 🌈
* Kho bạc v1 🏦
* Kho bạc lỗi thời 💤
* Giải thích Hệ số Kích thưởng 🚀 Curve 🌈

## Kho bạc Fantom

* Các kho bạc 🏛️

# Kho bạc Ethereum Ξ

Yearn&nbsp;Finance chào đời và hiện triển khai phần lớn các kho bạc yVault trên Mạng chính (`Mainnet`) của Ethereum. Chúng tôi đã triển khai hơn 250 chiến lược và 100 yVault trên Ethereum. Bạn có thể tìm hiểu chi tiết về chúng ở mục sau đây.

## Yearn và Curve Song Kiếm Hợp Bích 🔵🤝🌈

Một trong những thành phần quan trọng đối với cơ sở hạ tầng của Yearn là quan hệ cộng tác với [Curve.fi](http://curve.fi/). Nhiều kho bạc Yearn gửi tiền vào các bể góp vốn của Curve rồi "cọc" tôken cấp thanh khoản (`liquidity provider token` hay `LP token`) trong tỷ xích tương ứng, thu về phần thưởng là đồng CRV. Yearn khóa 10% tổng số CRV kiếm được vào yveCRV-DAO ("Backscratcher" hay "Gãi lưng") để "kích" lấy thêm một lượng CRV nữa. Trong các mô tả chiến lược (`strategy`) dưới đây, những kho bạc (`vault`) được kích thưởng sẽ có dấu hiệu 🚀 để dễ nhận biết.

Nếu muốn hiểu sâu hơn, hãy tham khảo phần _Giải thích Hệ số Kích thưởng Curve_ ở gần cuối tư liệu này.

Lượng còn lại, hay 90% CRV thưởng, được bán-đổi (`swap`) lấy tôken&nbsp;LP tương ứng rồi gửi tiếp vào kho bạc. Ngoại lệ duy nhất là kho yvUSDN3Crv, nó sẽ khóa 50% số CRV thưởng vào kho Gãi lưng (`Backscratcher`) và bán-đổi (`swap`) phần 50% còn lại.

![](1.png)

### Kho bạc veCRV-DAO ([yveCRV-DAO](https://etherscan.io/address/0xc5bDdf9843308380375a611c18B50Fb9341f502A))

_Còn gọi là "Gãi lưng" (`Backscratcher`)_ [📺](https://youtu.be/kJEAe2Rlh70)  
Kho bạc này quy đổi CRV của bạn thành yveCRV, liên tục thu về phần chia sẻ phí giao dịch (một nguồn doanh thu) của Curve mà được kích thưởng trên những gì đang nhận từ việc đặt cọc (`staking`) ở Curve. Quy đổi càng nhiều CRV, phần thưởng mỗi tuần càng lớn. Thứ Sáu hàng tuần, kho bạc lấy (`claim`) phần thưởng theo dạng 3Crv (tôken&nbsp;LP bể 3pool của Curve).

Về phần mình, bản thân Yearn ký gửi 10% tất cả CRV kiếm được vào kho này rồi trao phần thưởng 3Crv cho chủ sở hữu tôken kho bạc, vốn là nguồn "kích" lợi mỗi tuần.

Gửi vào đây là không thể trực tiếp đảo lại: Bạn chỉ có thể quy đổi một chiều từ CRV sang yveCRV, do CRV sẽ vĩnh viễn đặt cọc theo kiểu "phiếu bầu ký quỹ" (`voting escrow`) ở Curve. Tất cả các kho bạc trao 10% CRV kiếm được cho kho này để duy trì mức độ kích thưởng.

Để biết thêm chi tiết, xin vui lòng đọc bài viết này: [https://medium.com/iearn/thats-boost-folks-7afae75db826](https://medium.com/iearn/thats-boost-folks-7afae75db826), hoặc [bản dịch tại blog Tiếng Việt](https://vietnamese.blog.yearn.finance/thats-boost-folks/).

## Các kho bạc 🏛️

Các kho bạc v2 có khả năng vận dụng nhiều chiến lược mỗi kho (tối đa 20 chiến lược cùng lúc), không như phiên bản v1 với chỉ một chiến lược mỗi "yVault". [📺](https://youtu.be/ZES91i-hNAM)

![](2.png)

### Kho bạc Lãi kép veCRV của Yearn ([yvBOOST](https://etherscan.io/address/0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a))

[StrategyYearnVECRV](https://etherscan.io/address/0x2923a58c1831205C854DBEa001809B194FDb3Fa5) [📺](https://youtu.be/Ik6GdGYO_x8)  
Kho bạc này nhận tôken [yveCRV-DAO](https://etherscan.io/address/0xc5bDdf9843308380375a611c18B50Fb9341f502A), vốn liên tục mang lại cho bạn phần chia sẻ phí giao dịch (một nguồn doanh thu) của Curve (lấy hàng tuần dưới dạng [3Crv](https://etherscan.io/address/0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490), tôken&nbsp;LP bể 3pool của Curve). Phần thưởng được "thu hoạch" (`harvest`), rồi bán-đổi (`swap`) lấy thêm yveCRV-DAO [bằng cách mua theo lệnh-thị-trường (`market-buy`) hoặc tạo thêm (`mint`), tùy phương án nào hiệu quả nhất tại thời điểm "thu hoạch"] và ký gửi tiếp vào lại kho bạc.

Để biết thêm chi tiết, xin vui lòng đọc bài viết này: [https://medium.com/iearn/thats-boost-folks-7afae75db826](https://medium.com/iearn/thats-boost-folks-7afae75db826), hoặc [bản dịch tại blog Tiếng Việt](https://vietnamese.blog.yearn.finance/thats-boost-folks/).

![](3.png)

### ✨ Kho bạc YFI ([yvYFI](https://etherscan.io/address/0xdb25cA703181E7484a155DD612b06f57E12Be5F0))

✨ [Rebalancer YFI JointProvider YFI-WETH](https://etherscan.io/address/0x4050eB90c15F27aa75b5CFcb934a26fDE60Cf9Cb)  
Dùng YFI làm một nửa phần cấp thanh khoản chung cho [Bể YFI-WETH với Nguồn Cấp Dữ liệu có Tỷ trọng (`Weighted Oracle`) ](https://app.balancer.fi/#/pool/0x186084ff790c65088ba694df11758fae4943ee9e000200000000000000000013) tại [Balancer.fi](https://app.balancer.fi/). Phần thưởng được "thu hoạch" (`harvest`), chia đều, bán để lấy thêm YFI và ký gửi tiếp vào lại chiến lược.

✨ [StrategyGenLevAAVE-Flashmint](https://etherscan.io/address/0xDfFe2E8B9DD8Cc0367AAED727c07a8d2bB36Ed8b)  
Cấp YFI cho [AAVE](https://aave.com/) và "tạo giây lát" (`flashmint`) thêm một lượng YFI nữa để tối đa hóa thu nhập stkAAVE. "Tạo giây lát" (`flashmint`) được dùng để tạo (`mint`) DAI từ MakerDAO rồi "cho vay giây lát" (`flashlend`) nhằm "bẩy" mạnh vị trí tài chính này, tăng thêm APY (Phần trăm Hoa lợi Một năm). stkAAVE được "thu hoạch", bán để lấy thêm YFI và ký gửi tiếp vào lại chiến lược.

✨ [StrategyMakerV2\_YFI-A](https://etherscan.io/address/0xbC27C4873D0ddE214387cE5a838DC78857633Ea2)  
Khóa YFI tại [MakerDAO](https://oasis.app/) qua YFI-A để tạo (`mint`) DAI. Sau đó, lượng DAI vừa tạo được ký gửi vào kho bạc DAI v2 của chúng tôi để kiếm lãi suất.

![](4.png)

### Kho bạc SNX ([yvSNX](https://etherscan.io/address/0xF29AE508698bDeF169B89834F76704C3B205aedf#code))

✨ [StrategyLeagueDAOStakingSNX](https://etherscan.io/address/0xcB787FC49d54047688e58D283BE9b809b41395A9)  
Cấp SNX cho [LeagueDao](https://dao.leaguedao.com/yield-farming/snx) để thu về LEAG. Phần thưởng được "thu hoạch", bán để lấy thêm SNX và ký gửi tiếp vào lại chiến lược.

[StrategySynthetixSusdMinter  
](https://etherscan.io/address/0xc9a62e09834cEdCFF8c136f33d0Ae3406aea66bD)Đặt cọc (`stake`) SNX tại Synthetix để tạo (`mint`) sUSD. **Phần thưởng từ việc này bị khóa dưới dạng "cọc" SNX và sẽ được giải phóng sau 1 năm**. Sau đó, lượng sUSD vừa tạo được ký gửi vào kho bạc sUSD v2 của chúng tôi để kiếm lãi suất. Lãi suất từ sUSD, khoản chia (phí sử dụng) hàng tuần và phần thưởng giải phóng (`vested`) (khi có thể lấy) được bán-đổi (`swap`) lấy thêm SNX và ký gửi tiếp vào lại kho bạc.

[StrategyUniverseStaking](https://etherscan.io/address/0x29d23b73Dd0ed729F516bb55622765AF102f0e33)  
Cấp SNX cho universe.xyz để thu về XYZ. Phần thưởng được thu hoạch, bán để lấy thêm SNX và ký gửi tiếp vào lại kho bạc.

![](5.png)

### Kho bạc RAI ([yvRAI](https://etherscan.io/address/0x873fB544277FD7b977B196a826459a69E27eA4ea))

[StrategyIdleidleRAIYield](https://etherscan.io/address/0x5D411D2cde10e138d68517c42bE2808C90c22026) 🚀  
Cấp RAI cho Idle.finance để thu về IDLE và RAI. Phần thưởng được thu hoạch, bán để lấy thêm RAI và ký gửi tiếp vào lại kho bạc.

![](6.png)

### Kho bạc LINK ([yvLINK](https://etherscan.io/address/0x671a912C10bba0CFA74Cfc2d6Fba9BA1ed9530B2)) [📺](https://youtu.be/LT51QWfAMv8)

✨ [StrategyLeagueDAOStakingLINK](https://etherscan.io/address/0xf6D87dFC0841A289614B3d6fdb78D956ebd3cfF0)  
Cấp LINK cho [LeagueDao](https://dao.leaguedao.com/yield-farming) để thu về LEAG. Phần thưởng được "thu hoạch", bán để lấy thêm LINK và ký gửi tiếp vào lại chiến lược.

[Vesper LINK](https://etherscan.io/address/0x8198815871a45A5a883d083B7B105927eb9919D8)  
Cấp LINK cho Bể LINK ở [Vesper Finance](https://vesper.finance/) để thu về VSP. Phần thưởng được thu hoạch, bán để lấy thêm LINK và ký gửi tiếp vào lại kho bạc.

[AaveLenderLINKBorrowerSUSD](https://etherscan.io/address/0x906f0a6f23e7160eB0927B0903ab80b5E3f3950D)  
Cho vay LINK trên AAVE để lấy lãi suất và tích lũy phần thưởng "cọc" (`staked`) AAVE. Đồng thời mượn sUSD để ký gửi vào kho bạc (`yVault`) sUSD nhằm kiếm lãi suất. Phần thưởng từ AAVE giải phóng và yvSUSD được thu hoạch, bán để lấy thêm LINK rồi ký gửi tiếp vào lại kho bạc.

[StrategyMakerLINKDAIDelegate](https://etherscan.io/address/0x136fe75bfDf142a917C954F58577DB04ef6F294B)  
Khóa LINK tại MakerDAO qua LINK-A để tạo (`mint`) DAI. Sau đó, lượng DAI vừa tạo được ký gửi vào kho bạc DAI v2 của chúng tôi để kiếm lãi suất.

![](7.png)

### Kho bạc sUSD ([yvsUSD](https://etherscan.io/address/0xa5cA62D95D24A4a350983D5B8ac4EB8638887396#code))

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x215DeE632335829155Dcb62452c4878C48c1C884)  
Cho vay sUSD trên AAVE và Cream để lấy lãi suất và tích lũy phần thưởng "cọc" (`staked`) AAVE. Khi "cọc" AAVE mở khóa, chúng được thu hoạch, bán để lấy thêm sUSD rồi ký gửi tiếp vào lại kho bạc.

[SingleSidedCrvsUSD](https://etherscan.io/address/0x74b3E5408B1c29E571BbFCd94B09D516A4d81f36) 🚀  
Ký gửi sUSD vào bể curve SAAVE trên curve.fi. Phần thưởng được thu hoạch, bán để lấy thêm sUSD và ký gửi tiếp vào lại kho bạc.

[SingleSidedCrvsUSD](https://etherscan.io/address/0x95eA1643699F8DE347975F31CA8d03eCC507616c) 🚀  
Ký gửi sUSD vào bể curve SUSDv2 trên curve.fi. Phần thưởng được thu hoạch, bán để lấy thêm sUSD và ký gửi tiếp vào lại kho bạc.

![](8.png)

### Kho bạc 1INCH ([yv1INCH](https://etherscan.io/address/0xB8C3B7A2A618C552C23B1E4701109a9E756Bab67))

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x86eD4F77d40182b8686a25e125FB3f5a04203CaA)  
Cho vay tôken 1INCH trên C.R.E.A.M. để lấy lãi suất.

[Strategy1INCHGovernance](https://etherscan.io/address/0xB12F6A5776EDd2e923fD1Ce93041B2000A22dDc7)  
Đặt cọc tôken 1INCH tại 1INCH DAO để thu thập phần thưởng quản trị. Phần thưởng được thu hoạch và ký gửi tiếp vào lại kho bạc.

![](9.png)

### Kho bạc WETH ([yvWETH](https://etherscan.io/address/0xa258C4606Ca8206D8aA700cE2143D7db854D168c))

_Bất cứ ETH nào nhận vào đều được "gói" (`wrap`) thành WETH rồi ký gửi._

✨ [Rebalancer WETH JointProvider YFI-WETH](https://etherscan.io/address/0x580Ae3AeD3E8e8d83c970FA6D2766C0Fb8AF759F)  
Dùng wETH làm một nửa phần cấp thanh khoản chung cho [Bể YFI-WETH với Nguồn Cấp Dữ liệu có Tỷ trọng (`Weighted Oracle`) ](https://app.balancer.fi/#/pool/0x186084ff790c65088ba694df11758fae4943ee9e000200000000000000000013) tại [Balancer.fi](https://app.balancer.fi/). Phần thưởng được "thu hoạch" (`harvest`), chia đều, bán để lấy thêm wETH và ký gửi tiếp vào lại chiến lược.

✨ [SingleSidedBalancer B-stETH-STABLEPool WETH](https://etherscan.io/address/0xc31763c0c3025b9DF3Fb7Cb7f4AC041866F64F2E)  
Ký gửi wETH vào [Bể Bình giá wstETH-wETH](https://app.balancer.fi/#/pool/0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080) trên [Balancer.fi](https://app.balancer.fi/), BAL được thu hoạch, bán để lấy thêm wETH và ký gửi tiếp vào lại chiến lược.

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0xec2DB4A1Ad431CC3b102059FA91Ba643620F0826)  
Cho vay wETH trên Alpha Homora để lấy lãi suất.

[AaveWETHLenderUSDTBorrower](https://etherscan.io/address/0xd28b508EA08f14A473a5F332631eA1972cFd7cC0)  
Cho vay wETH trên AAVE để lấy lãi suất và tích lũy phần thưởng "cọc" (`staked`) AAVE. Đồng thời mượn USDT để ký gửi vào kho bạc (`yVault`) USDT kiếm lãi suất. Phần thưởng từ AAVE giải phóng và yvUSDT được thu hoạch, bán để lấy thêm wETH rồi ký gửi tiếp vào lại kho bạc.

[StrategyGenericLevCompFarmWeth](https://etherscan.io/address/0x83B6211379c26E0bA8d01b9EcD4eE1aE915630aa)  
Cấp ETH cho Compound và mượn thêm một lượng ETH nữa để tối đa hóa thu nhập COMP. "Vay–trả giây lát" (`flashloan`) được dùng để lấy thêm ETH từ dYdX nhằm "bẩy" vị trí tài chính, tăng APY. Phần thưởng COMP được thu hoạch, bán để lấy thêm ETH và ký gửi tiếp vào lại kho bạc.

[StrategystETHAccumulator](https://etherscan.io/address/0x0967aFe627C732d152e3dFCAdd6f9DBfecDE18c3)  
Đặt cọc wETH tại [Lido.fi](http://lido.fi/) để tạo (`mint`) stETH, vốn tích lũy phần thưởng "cọc" ETH 2.0. Chiến lược này sẽ mua stETH từ thị trường tự do nếu giá rẻ hơn khi đặt cọc.

[ssc\_eth\_seth](https://etherscan.io/address/0xc57A4D3FBEF85e675f6C3656498beEfe6F9DcB55)  
Ký gửi ETH vào bể curve sETH tại [curve.fi](http://curve.fi/). Phần thưởng được thu hoạch, bán để lấy thêm ETH và ký gửi tiếp vào lại kho bạc.

[ssc\_eth\_steth](https://etherscan.io/address/0xF9fDc2B5F60355A237deb8BD62CC117b1C907f7b)  
Ký gửi ETH vào bể curve stETH tại [curve.fi](http://curve.fi/). Phần thưởng được thu hoạch, bán để lấy thêm ETH và ký gửi tiếp vào lại kho bạc.

[StrategyMakerV2\_ETH-C](https://etherscan.io/address/0xd33535e9F2E09485aC9cE8b27F865251161065E0)  
Khóa ETH tại MakerDAO qua ETH-C để tạo (`mint`) DAI. Sau đó, lượng DAI vừa tạo được ký gửi vào kho bạc DAI v2 của chúng tôi để kiếm lãi suất.

![](10.png)

### Kho bạc USDC ([yvUSDC](https://etherscan.io/address/0x5f18c75abdae578b483e5f43f12a39cf75b973a9))

✨ [GenLevCompV3](https://etherscan.io/address/0x7900c70a377f89DF29D1D1939469ae3B74c5B740)  
Cấp USDC cho [Compound](https://compound.finance/) rồi mượn thêm một lượng USDC nữa để tối đa hóa thu nhập COMP. "Tạo giây lát" (`flashmint`) được dùng để tạo (`mint`) DAI từ MakerDAO rồi "cho vay giây lát" (`flashlend`) nhằm "bẩy" mạnh vị trí tài chính này, tăng thêm APY (Phần trăm Hoa lợi Một năm). Phần thưởng COMP được thu hoạch, bán để lấy thêm USDC và ký gửi tiếp vào lại kho bạc.

✨ [SingleSidedBalancer staBAL3Pool USDC](https://etherscan.io/address/0x520BF095FA58cB3f68C18D01746041733A1f7b85)  
Ký gửi USDC vào [Bể Bình giá DAI-USDC-USDT](https://app.balancer.fi/#/pool/0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063) trên [Balancer.fi](https://app.balancer.fi/), BAL được thu hoạch, bán để lấy thêm USDC và ký gửi tiếp vào lại chiến lược.

[StrategyAH2EarncyUSDC](https://etherscan.io/address/0x86Aa49bf28d03B1A4aBEb83872cFC13c89eB4beD#code)  
Cho vay USDC trên Alpha Homora v2 để lấy lãi suất.

[SingleSidedCrvUSDC](https://etherscan.io/address/0x80af28cb1e44C44662F144475d7667C9C0aaB3C3) 🚀  
Ký gửi USDC vào một bể curve USDC trên [curve.fi](http://curve.fi/), và chuyển sang bể curve nhiều lợi nhuận nhất.

[PoolTogether USD Coin](https://etherscan.io/address/0x387fCa8d7e2e09655b4F49548607B55C0580fC63)  
Cấp USDC cho giao thức [PoolTogether](https://pooltogether.com/) để kiếm POOL. Phần thưởng được thu hoạch, bán để lấy thêm USDC và ký gửi tiếp vào lại kho bạc. Nếu chiến lược này giành giải của tuần, nó cũng sẽ được thêm vào kho bạc.

[StrategyRook USD Coin](https://etherscan.io/address/0x4140F350c1B67184fE3AaEa314d8C967F99EE8Cc)  
Cấp USDC cho KeeperDAO để kiếm ROOK. Phần thưởng được thu hoạch, bán để lấy thêm USDC và ký gửi tiếp vào lại kho bạc.

![](11.png)

### Kho bạc DAI ([yvDAI](https://etherscan.io/address/0xdA816459F1AB5631232FE5e97a05BBBb94970c95))

✨ [SingleSidedBalancer staBAL3Pool DAI](https://etherscan.io/address/0x9cfF0533972da48Ac05a00a375CC1a65e87Da7eC)  
Ký gửi DAI vào [Bể Bình giá DAI-USDC-USDT](https://app.balancer.fi/#/pool/0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063) trên [Balancer.fi](https://app.balancer.fi/), BAL được thu hoạch, bán để lấy thêm DAI và ký gửi tiếp vào lại chiến lược.

✨ [AaveDAILenderSUSDBorrower](https://etherscan.io/address/0xC9db3AF6603329dF6C85E168D41B74832452ef08)  
Cho vay DAI trên [AAVE](https://aave.com/) để lấy lãi suất và tích lũy phần thưởng stkAAVE. Đồng thời mượn sUSD để ký gửi vào kho bạc (`yVault`) sUSD nhằm kiếm lãi suất. Phần thưởng từ AAVE giải phóng (`vested`) và yvSUSD được thu hoạch, bán để lấy thêm DAI rồi ký gửi tiếp vào lại chiến lược.

✨ [StrategyGenLevAAVE-Flashmint](https://etherscan.io/address/0xBCF537f93FAc59D35a8e7Ac8d132ab5aE860481D)  
Cấp DAI trên [AAVE](https://aave.com/) và "tạo giây lát" (`flashmint`) thêm một lượng DAI nữa để tối đa hóa thu nhập stkAAVE. "Tạo giây lát" (`flashmint`) được dùng để tạo (`mint`) DAI từ MakerDAO rồi "cho vay giây lát" (`flashlend`) nhằm "bẩy" mạnh vị trí tài chính này, tăng thêm APY (Phần trăm Hoa lợi Một năm). stkAAVE được "thu hoạch", bán để lấy thêm DAI và ký gửi tiếp vào lại chiến lược.

✨ [GenLevCompV3](https://etherscan.io/address/0x1676055fE954EE6fc388F9096210E5EbE0A9070c)  
Cấp DAI cho [Compound](https://compound.finance/) rồi mượn thêm một lượng DAI nữa để tối đa hóa thu nhập COMP. "Tạo giây lát" (`flashmint`) được dùng để tạo (`mint`) DAI từ MakerDAO rồi "cho vay giây lát" (`flashlend`) nhằm "bẩy" mạnh vị trí tài chính này, tăng thêm APY (Phần trăm Hoa lợi Một năm). Phần thưởng COMP được thu hoạch, bán để lấy thêm DAI và ký gửi tiếp vào lại chiến lược.

[StrategyLenderYieldOptimiser](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view)  
Cho vay DAI trên AAVE để lấy lãi suất và tích lũy phần thưởng "cọc" (`staked`) AAVE. Khi "cọc" AAVE mở khóa, chúng được thu hoạch, bán để lấy thêm DAI rồi ký gửi tiếp vào lại kho bạc.

[StrategyKashiMultiPairLender](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view)  
Cho vay DAI trên Sushi qua Kashi để lấy lãi suất. Phần thưởng được thu hoạch, bán để lấy thêm DAI và ký gửi tiếp vào lại kho bạc.

✨ [StrategyGenericLevCompFarm](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view)  
Cấp DAI cho Compound rồi mượn thêm một lượng DAI nữa để tối đa hóa thu nhập COMP. "Vay–trả giây lát" (`flashloan`) được dùng để lấy thêm DAI từ dYdX nhằm "bẩy" vị trí tài chính, tăng APY. Phần thưởng COMP được thu hoạch, bán để lấy thêm DAI và ký gửi tiếp vào lại kho bạc.

[ssc dai ib](https://etherscan.io/address/0xa6D1C610B3000F143c18c75D84BaA0eC22681185)  
Ký gửi DAI vào bể curve Iron Bank tại [curve.fi](http://curve.fi/). Phần thưởng được thu hoạch, bán để lấy thêm DAI và ký gửi tiếp vào lại kho bạc.

![](12.png)

### Kho bạc WBTC ([yvWBTC](https://etherscan.io/address/0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E))

✨ [SingleSidedBalancer staBAL3-BTCPool WBTC](https://etherscan.io/address/0x7c1612476D235c8054253c83B98f7Ca6f7F2E9D0)  
Ký gửi wBTC vào [Bể Bình giá wBTC-renBTC-sBTC](https://app.balancer.fi/#/pool/0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56000000000000000000000066) trên [Balancer.fi](https://app.balancer.fi/), BAL được thu hoạch, bán để lấy thêm wBTC và ký gửi tiếp vào lại chiến lược.

✨ [StrategyGenLevAAVE-Flashmint](https://etherscan.io/address/0x53b087ad0e7790477AF36429cFCa606D373E3EbD)  
Cấp wBTC cho [AAVE](https://aave.com/) và "tạo giây lát" (`flashmint`) thêm một lượng wBTC nữa để tối đa hóa thu nhập stkAAVE. "Tạo giây lát" (`flashmint`) được dùng để tạo (`mint`) DAI từ MakerDAO rồi "cho vay giây lát" (`flashlend`) nhằm "bẩy" mạnh vị trí tài chính này, tăng thêm APY (Phần trăm Hoa lợi Một năm). stkAAVE được "thu hoạch", bán để lấy thêm wBTC và ký gửi tiếp vào lại chiến lược.

✨ [GenLevCompV3](https://etherscan.io/address/0x8C818613A97900CC1EDA5893F04701b62e7c1138)  
Cấp wBTC cho [Compound](https://compound.finance/) rồi mượn thêm một lượng wBTC nữa để tối đa hóa thu nhập COMP. "Tạo giây lát" (`flashmint`) được dùng để tạo (`mint`) DAI từ MakerDAO rồi "cho vay giây lát" (`flashlend`) nhằm "bẩy" mạnh vị trí tài chính này, tăng thêm APY (Phần trăm Hoa lợi Một năm). Phần thưởng COMP được thu hoạch, bán để lấy thêm wBTC và ký gửi tiếp vào lại chiến lược.

[SingleSidedCrvWBTC](https://etherscan.io/address/0x40b04B3ed9845B8Be200Aa2D9C3eDC2bE0a5f01f) 🚀  
Ký gửi wBTC vào một bể Curve BTC trên [curve.fi](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) và chuyển sang bể curve nhiều lợi nhuận nhất.

[yvWBTCStratMMV1](https://etherscan.io/address/0x53a65c8e238915c79a1e5C366Bc133162DBeE34f)  
Cấp wBTC vào Kho bạc wBTC của [Mushroom Finance](https://mushrooms.finance/) rồi đến wBTC Farm để kiếm MM. MM được thu hoạch, bán để lấy thêm wBTC rồi ký gửi tiếp vào lại kho bạc của chúng tôi.

[ssc wbtc bbtc](https://etherscan.io/address/0x4b254EbBbb8FDb9D3E848501784692b2726b310c)  
Ký gửi wBTC vào bể curve bBTC trên [curve.fi](http://curve.fi/). Phần thưởng được thu hoạch, bán để lấy thêm wBTC và ký gửi tiếp vào lại kho bạc.

[ssc wbtc pbtc](https://etherscan.io/address/0x29367915508e47c631d220caEbA855901c13a3dE)  
Ký gửi wBTC vào bể curve pBTC trên [curve.fi](http://curve.fi/). Phần thưởng được thu hoạch, bán để lấy thêm wBTC và ký gửi tiếp vào lại kho bạc.

[ssc wbtc obtc](https://etherscan.io/address/0x64B2a32f030D9210E51ed8884C0D58b89137Ca81)  
Ký gửi wBTC vào bể curve oBTC trên [curve.fi](http://curve.fi/). Phần thưởng được thu hoạch, bán để lấy thêm wBTC và ký gửi tiếp vào lại kho bạc.

[StrategyGenLevAAVE](https://etherscan.io/address/0x90021FA777f77342E6FEBaBD768ba8e14D62a3f5)  
Cấp wBTC cho AAVE rồi mượn thêm một lượng wBTC nữa để tối đa hóa thu nhập stAAVE. "Vay–trả giây lát" (`flashloan`) được dùng để lấy thêm wBTC từ dYdX nhằm "bẩy" vị trí tài chính, tăng APY. stAAVE được thu hoạch, bán để lấy thêm wBTC và ký gửi tiếp vào lại kho bạc.

![](13.png)

### Kho bạc USDT ([yvUSDT](https://etherscan.io/token/0x7Da96a3891Add058AdA2E826306D812C638D87a7))

✨ [SingleSidedBalancer staBAL3Pool USDT](https://etherscan.io/address/0x3ef6Ec70D4D8fE69365C92086d470bb7D5fC92Eb)  
Ký gửi USDT vào [Bể Bình giá DAI-USDC-USDT](https://app.balancer.fi/#/pool/0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063) trên [Balancer.fi](https://app.balancer.fi/), BAL được thu hoạch, bán để lấy thêm USDT và ký gửi tiếp vào lại chiến lược.

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x2f87c5e8396F0C41b86aad4F3C8358aB21681952)  
Cho vay USDT trên AAVE để lấy lãi suất.

[StrategyAH2EarncyUSDT](https://etherscan.io/address/0x82292B8035873d7DD8a96767F6b3F885564aa919)  
Cho vay USDT trên Alpha Homora v2 để lấy lãi suất.

[StrategyIdleUSDTYield](https://etherscan.io/address/0x01b54c320d6B3057377cbc71d953d1BBa84df44e)  
Cấp USDT cho Idle Finance để kiếm COMP và IDLE. Phần thưởng được thu hoạch, bán để lấy thêm USDT và ký gửi tiếp vào lại kho bạc.

[SingleSidedCrvUSDT](https://etherscan.io/address/0xf840d061E83025F4cD6610AE5DDebCcA43327f9f) 🚀  
Ký gửi USDT vào một bể curve USDT trên [curve.fi](http://curve.fi/) và chuyển sang bể curve nhiều lợi nhuận nhất.

![](14.png)

### Kho bạc UNI ([yvUNI](https://etherscan.io/address/0xFBEB78a723b8087fD2ea7Ef1afEc93d35E8Bed42))

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x5e882c9f00209315e049B885B9b3dfbEe60D80A4)  
Cho vay UNI trên AAVE để lấy lãi suất và tích lũy phần thưởng "cọc" (`staked`) AAVE. Khi "cọc" AAVE mở khóa, chúng được thu hoạch, bán để lấy thêm UNI rồi ký gửi tiếp vào lại kho bạc.

[PoolTogether Uniswap](https://etherscan.io/address/0x6EB00860260CF51623737e17579Db797d71cd337)  
Cấp UNI cho giao thức [PoolTogether](https://pooltogether.com/) để kiếm POOL. Phần thưởng được thu hoạch, bán để lấy thêm UNI và ký gửi tiếp vào lại kho bạc. Nếu chiến lược này giành giải của tuần, nó cũng sẽ được thêm vào kho bạc.

[StrategyMakerUNIDAIDelegate](https://etherscan.io/address/0x9Ae0B9a67cF5D603847980D95Ad4D45b57Ff7783)  
Khóa UNI tại MakerDAO qua UNI-A để tạo (`mint`) DAI. Sau đó, lượng DAI vừa tạo được ký gửi vào kho bạc DAI v2 của chúng tôi để kiếm lãi suất.

[Vesper UNI](https://etherscan.io/address/0x60A3D5bEeEED797ccFf709ee78A42E2cF67235B7)  
Cấp UNI cho bể vUNI ở Vesper Finance để kiếm VSP. Phần thưởng được thu hoạch, bán để lấy thêm UNI và ký gửi tiếp vào lại kho bạc.

![](15.png)

### Kho bạc AAVE (yvAAVE)

[StrategyUniverseStaking](https://etherscan.io/address/0x9a5AfC29186b5d27F12F8CE6fe9E6Bd2cbb2BCDC)  
Cấp AAVE cho universe.xyz để thu về XYZ. Phần thưởng được thu hoạch, bán để lấy thêm AAVE và ký gửi tiếp vào lại kho bạc.

✨ [StrategyLenderYieldOptimiser](https://etherscan.io/address/0xC06ed8E16F1E66acC03F7af1b0bA96fFF589E495)  
Cấp AAVE cho [Iron Bank](https://beta.yearn.finance/#/ironbank) để lấy lãi suất. Tôken thưởng được thu hoạch, bán để lấy thêm AAVE và ký gửi tiếp vào lại chiến lược.

![](16.png)

### Kho bạc COMP ([yvCOMP](https://etherscan.io/address/0x4A3FE75762017DB0eD73a71C9A06db7768DB5e66))

[StrategyUniverseStaking](https://etherscan.io/address/0x95730d3E374b5E1F5b550Af059Af86D23feA79e3)  
Cấp COMP cho universe.xyz để thu về XYZ. Phần thưởng được thu hoạch, bán để lấy thêm COMP và ký gửi tiếp vào lại kho bạc.

![](17.png)

### Kho bạc SUSHI ([yvSUSHI](https://etherscan.io/address/0x6d765CbE5bC922694afE112C140b8878b9FB0390))

✨ [StrategyLeagueDAOStakingSUSHI](https://etherscan.io/address/0x4FC500c2d49d54a99368852e42405B62C59D42A6)  
Cấp SUSHI cho [LeagueDao](https://dao.leaguedao.com/yield-farming) để kiếm LEAG. Phần thưởng được "thu hoạch", bán để lấy thêm SUSHI và ký gửi tiếp vào lại chiến lược.

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x79Be3edA1d7FE92c18B9539bce2611bf8dc9BFc5)  
Chiến lược này cho vay tôken SUSHI trên hàng loạt nền tảng cho vay như CREAM và AAVE để kiếm lãi suất.

![](18.png)

### Kho bạc TUSD ([yvTUSD](https://etherscan.io/address/0xFD0877d9095789cAF24c98F7CCe092fa8E120775))

[StrategyKashiMultiPairLender](https://etherscan.io/address/0x564bf2844654f149821697cC56572eE4384c05f7)  
Cho vay TUSD trên Sushi qua Kashi để lấy lãi suất. Phần thưởng được thu hoạch, bán để lấy thêm TUSD và ký gửi tiếp vào lại kho bạc.

## Kho bạc Chiến lược Curve Finance 🌈

Kho bạc Curve yVault nhận ký gửi là các tôken bể thanh khoản (`liquidity pool token`) lấy được từ việc cấp tiền tương ứng trên Curve Finance. Để vào những kho bạc này, bạn cần ký gửi tài-sản-nền vào bể tương ứng trên Curve Finance. [📺](https://youtu.be/V47NzWeZjjk)

![](19.png)

### Kho bạc Bể Curve 3Crypto ([yvCurve-3Crypto](https://etherscan.io/address/0xE537B5cc158EB71037D4125BDD7538421981E6AA))

_Dù kho bạc này không bị lỗ tạm thời (`impermanent loss`), bể Curve nền tương ứng có thể gặp vấn đề đó khi rút. Hãy cẩn thận._

[Curvecrv3cryptoVoterProxy](https://etherscan.io/address/0xbA9052141cEf06FD55733D23231c37Fc856CE6F4) 🚀  
Kho bạc này nhận ký gửi là các tôken [crv3crypto](https://etherscan.io/address/0xc4AD29ba4B3c580e6D59105FFf484999997675Ff) lấy được từ việc cấp BTC, ETH hoặc USDT vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/tricrypto2/deposit). crv3crypto được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm crv3crypto.

[StrategyConvex3Crypto](https://etherscan.io/address/0x2055CFD5CDbc90c60A202A1AC3DDfB71AeC1cE98) 🚀  
Cấp crv3crypto vào Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm crv3crypto rồi ký gửi tiếp vào lại kho bạc.

![](20.png)

### ✨ Kho bạc Bể Curve USDM ([yvCurve-USDM](https://etherscan.io/address/0x6FAfCA7f49B4Fd9dC38117469cd31A1E5aec91F5))

✨ [StrategyCurveUSDM](https://etherscan.io/address/0x81329ecb1AB448DacF6b9ae696A097f790898899)  
Kho bạc này nhận ký gửi là các tôken USDM3CRV-f lấy được từ việc cấp USDM, DAI, USDC, USDT (hoặc tôken "gói" 3Crv) vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/23/deposit). Tôken USDM3CRV-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm USDM3CRV-f.

✨ [StrategyConvexUSDM](https://etherscan.io/address/0x240f5167A98Bc2198110BcdD4CB04D06Dd52d55d)  
Cấp USDM3CRV-f vào [Convex Finance](https://www.convexfinance.com/) để kiếm CRV. Phần thưởng được "thu hoạch", bán để lấy thêm USDM3CRV-f và ký gửi tiếp vào lại chiến lược.

![](21.png)

### ✨ Kho bạc Bể Curve alETH ([yvCurve-alETH](https://etherscan.io/address/0x718AbE90777F5B778B52D553a5aBaa148DD0dc5D))

✨ [StrategyCurvealETH](https://etherscan.io/address/0x3f4a63F3Ee9bA49004953f6879c7516D85969F5F)  
Kho bạc này nhận ký gửi là các tôken alETH+ETH-f lấy được từ việc cấp alETH hoặc ETH vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/38/deposit). Tôken alETH+ETH-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm alETH+ETH-f.

✨ [StrategyConvexalETH](https://etherscan.io/address/0x4ec142d094BecA5f7789CCd9341D0215c8B1e43f)  
Cấp alETH+ETH-f vào [Convex Finance](https://www.convexfinance.com/) để kiếm CRV. Phần thưởng được "thu hoạch", bán để lấy thêm alETH+ETH-f và ký gửi tiếp vào lại chiến lược.

![](22.png)

### ✨ Kho bạc Bể Curve EURN ([yvCurve-EURN](https://etherscan.io/address/0x8b9C0c24307344B6D7941ab654b2Aeee25347473))

✨ [StrategyCurveEURN](https://etherscan.io/address/0x7847b7027cab6Fc4ea08cA0fF3b7464727712f91)  
Kho bạc này nhận ký gửi là các tôken EURN/EURT-f lấy được từ việc cấp EURN hoặc EURT vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/33/deposit). Tôken EURN/EURT-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm EURN/EURT-f.

✨ [StrategyConvexEURN](https://etherscan.io/address/0x3199437193625DCcD6F9C9e98BDf93582200Eb1f)  
Cấp EURN/EURT-f vào [Convex Finance](https://www.convexfinance.com/) để kiếm CRV. Phần thưởng được "thu hoạch", bán để lấy thêm EURN/EURT-f và ký gửi tiếp vào lại chiến lược.

![](23.png)

### ✨ Kho bạc Curve MIM-UST ([yvCurve-MIMUST](https://etherscan.io/address/0xd8C620991b8E626C099eAaB29B1E3eEa279763bb))

✨ [StrategyCurveMIMUST](https://etherscan.io/address/0xbb241fD9A2A3742ef9E10ccfd8a6C4E0EbEb03f2)  
Kho bạc này nhận ký gửi là các tôken MIM-UST-f lấy được từ việc cấp MIM hoặc UST vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/48/deposit). Tôken MIM-UST-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm MIM-UST-f.

✨ [StrategyConvexMIMUST](https://etherscan.io/address/0x5796698A29F3626c9FE13C4d3d3dEE987c84EBB3)  
Cấp MIM-UST-f vào [Convex Finance](https://www.convexfinance.com/) để kiếm CRV. Phần thưởng được "thu hoạch", bán để lấy thêm MIM-UST-f và ký gửi tiếp vào lại chiến lược.

![](24.png)

### Kho bạc Bể Curve EURT ([yvCurve-EURT](https://etherscan.io/address/0x0d4EA8536F9A13e4FBa16042a46c30f092b06aA5))

[StrategyCurveEURT](https://etherscan.io/address/0x26AB2029083909FeEFF8Cb0fA04c1CfF52499DE7)  
Kho bạc này nhận ký gửi là các tôken EURT-f lấy được từ việc cấp EURT hoặc sEUR vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/eurt/deposit). Tôken EURT-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm EURT-f.

[StrategyConvexEURT](https://etherscan.io/address/0x5E10E27DEae12877e23A68cC0d6F1b134b4d517A)  
Cấp EURT-f vào Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm EURT-f và ký gửi tiếp vào lại kho bạc.

![](25.png)

### Kho bạc Bể Curve MIM ([yvCurve-MIM](https://etherscan.io/address/0x2DfB14E32e2F8156ec15a2c21c3A6c053af52Be8))

[StrategyCurveMIM](https://etherscan.io/address/0x9E1FF8638a2F1aD4B924A4B9677aD9d9b74361Cf)  
Kho bạc này nhận ký gửi là các tôken MIM-3LP3CRV-f lấy được từ việc cấp MIM, DAI, USDC, USDT (hoặc tôken "gói" 3Crv) vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/mim/deposit). Tôken MIM-3LP3CRV-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và SPELL. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm MIM-3LP3CRV-f.

[StrategyConvexMIM](https://etherscan.io/address/0x6570B0a1593a59CcB378fb0b01A753875FCa99c4)  
Cấp MIM-3LP3CRV-f vào Convex Finance để kiếm CRV, SPELL và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm MIM-3LP3CRV-f và ký gửi tiếp vào lại kho bạc.

![](26.png)

### Kho bạc Bể Curve cvxCRV ([yvCurve-cvxCRV](https://etherscan.io/address/0x4560b99C904aAD03027B5178CCa81584744AC01f))

[StrategyCurvecvxCRV](https://etherscan.io/address/0xDCecD8DC5F3dDD480d2A06C56063DBf9c2a07E09)  
Kho bạc này nhận ký gửi là các tôken cvxcrv-f lấy được từ việc cấp CRV hoặc cvxCRV vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/22/deposit). Tôken cvxcrv-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm cvxcrv-f.

✨ [StrategyConvexcvxCRV](https://etherscan.io/address/0xAF6F42bfB29e90dFe51f2341fF1B1f99Fd776A70)  
Cấp cvxcrv-f vào [Convex Finance](https://www.convexfinance.com/) để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm cvxcrv-f và ký gửi tiếp vào lại chiến lược.

![](27.png)

### Kho bạc Bể Curve ibEUR ([yvCurve-ibEUR](https://etherscan.io/address/0x67e019bfbd5a67207755D04467D6A70c0B75bF60))

[StrategyCurveibEUR](https://etherscan.io/address/0xB431A88a6cFFfa66dBCf96Ebc89aE72Ff7Fcc34f)  
Kho bạc này nhận ký gửi là các tôken ibEUR+sEUR-f lấy được từ việc cấp ibEUR hoặc sEUR vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/3/deposit). Tôken ibEUR+sEUR-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và rKP3R. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ibEUR+sEUR-f.

✨ [StrategyConvexibEUR](https://etherscan.io/address/0x214D14f94a63B1714CCc39d12b4942e8Fdd56bA7)  
Cấp ibEUR+sEUR-f vào Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm ibEUR+sEUR-f và ký gửi tiếp vào lại kho bạc.

![](28.png)

### Kho bạc Bể Curve ibKRW ([yvCurve-ibKRW](https://etherscan.io/address/0x528D50dC9a333f01544177a924893FA1F5b9F748))

[StrategyCurveibKRW](https://etherscan.io/address/0x10Ae24bce6F06b1BFfdA701736BEB2069eCd5a49)  
Kho bạc này nhận ký gửi là các tôken ibKRW+sKRW-f lấy được từ việc cấp ibKRW hoặc sKRW vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/2/deposit). Tôken ibKRW+sKRW-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và rKP3R. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ibKRW+sKRW-f.

✨ [StrategyConvexibKRW](https://etherscan.io/address/0x73c3533c159F93C924f072B065F9DAA6C0445Be2)  
Cấp ibKRW+sKRW-f cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm ibKRW+sKRW-f và ký gửi tiếp vào lại kho bạc.

![](29.png)

### Kho bạc Bể Curve ibGBP ([yvCurve-ibGBP](https://etherscan.io/address/0x595a68a8c9D5C230001848B69b1947ee2A607164))

[StrategyCurveibEUR](https://etherscan.io/address/0x2063FcF4883E688FEc10e984d43bDa3ed9C00fd6)  
Kho bạc này nhận ký gửi là các tôken ibGBP+sGBP-f lấy được từ việc cấp ibGBP hoặc sGBP vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/30/deposit). Tôken ibGBP+sGBP-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và rKP3R. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ibGBP+sGBP-f.

✨ [StrategyConvexibGBP](https://etherscan.io/address/0x6CfAcEf79cA2AaE173Dc5089b9179a4193dC5784)  
Cấp ibGBP+sGBP-f cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm ibGBP+sGBP-f và ký gửi tiếp vào lại kho bạc.

![](30.png)

### Kho bạc Bể Curve ibAUD ([yvCurve-ibAUD](https://etherscan.io/address/0x1b905331F7dE2748F4D6a0678e1521E20347643F))

[StrategyCurveibAUD](https://etherscan.io/address/0x2c9740Fc1E03457bF7FDe9dA08e04476D91c038c)  
Kho bạc này nhận ký gửi là các tôken ibAUD+sAUD-f lấy được từ việc cấp ibAUD hoặc sAUD vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/29/deposit). Tôken ibAUD+sAUD-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và rKP3R. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ibAUD+sAUD-f.

✨ [StrategyConvexibAUD](https://etherscan.io/address/0x68d8dAd442102d1aECCa4f71246E20eBA9ab7216)  
Cấp ibAUD+sAUD-f cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm ibAUD+sAUD-f và ký gửi tiếp vào lại kho bạc.

![](31.png)

### Kho bạc Bể Curve ibCHF ([yvCurve-ibCHF](https://etherscan.io/address/0x490bD0886F221A5F79713D3E84404355A9293C50))

[StrategyCurveibCHF](https://etherscan.io/address/0x1bbB89ade777A36DF013DC098bEF9c9bA478d7fA)  
Kho bạc này nhận ký gửi là các tôken ibCHF+sCHF-f lấy được từ việc cấp ibCHF hoặc sCHF vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/31/deposit). Tôken ibCHF+sCHF-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và rKP3R. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ibCHF+sCHF-f.

✨ [StrategyConvexibCHF](https://etherscan.io/address/0xEe350e2B29AdD6504dDd81D3b6e3Dc4bA06A57B4)  
Cấp ibCHF+sCHF-f cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm ibCHF+sCHF-f và ký gửi tiếp vào lại kho bạc.

![](32.png)

### Kho bạc Bể Curve ibJPY ([yvCurve-ibJPY](https://etherscan.io/address/0x59518884EeBFb03e90a18ADBAAAB770d4666471e))

[StrategyCurveibJPY](https://etherscan.io/address/0xD47626A99B6BE937879c5D588852DF76d50A11D2)  
Kho bạc này nhận ký gửi là các tôken ibJPY+sJPY-f lấy được từ việc cấp ibJPY hoặc sJPY vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/factory/28/deposit). Tôken ibJPY+sJPY-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và rKP3R. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ibJPY+sJPY-f.

✨ [StrategyConvexibJPY](https://etherscan.io/address/0xf432da3d838111Bbc9F4B4D441Aaac8871597634)  
Cấp ibJPY+sJPY-f cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm ibJPY+sJPY-f và ký gửi tiếp vào lại kho bạc.

![](33.png)

### Kho bạc Bể Curve mUSD ([yvCurve-mUSD](https://etherscan.io/address/0x8cc94ccd0f3841a468184aCA3Cc478D2148E1757#code))

[Curvemusd3CRVVoterProxy](https://etherscan.io/address/0xf9fF7f463A7e6f43d4E65c230D3743355fC954e4) 🚀  
Kho bạc này nhận ký gửi là các tôken [musd3CRV](https://etherscan.io/address/0x1AEf73d49Dedc4b1778d0706583995958Dc862e6) lấy được từ việc cấp mUSD, DAI, USDC, USDT (hoặc tôken "gói" 3Crv) vào bể thanh khoản tương ứng trên Curve [tại đây](https://etherscan.io/address/0x1AEf73d49Dedc4b1778d0706583995958Dc862e6). Tôken musd3CRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm musd3CRV.

[Convexmusd3CRV](https://etherscan.io/address/0x75be6ABC02a010559Ed5c7b0Eab94abD2B783b65) 🚀  
Cấp musd3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm musd3CRV rồi ký gửi tiếp vào lại kho bạc.

![](34.png)

### Kho bạc Bể Curve Huobi BTC ([yvhCRV](https://etherscan.io/address/0x625b7DF2fa8aBe21B0A976736CDa4775523aeD1E))

[CurvehCRVVoterProxy](https://etherscan.io/address/0x91cBf0014a966615e1050c90A1aBf1d1d5d8cffd)🚀  
Kho bạc này nhận ký gửi là các tôken [hCRV](https://etherscan.io/address/0xb19059ebb43466C323583928285a49f558E572Fd) lấy được từ việc cấp hBTC hoặc wBTC vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/hbtc/deposit) và thu lại tôken hCRV. hCRV được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm hCRV.

[ConvexhCRV](https://etherscan.io/address/0x7Ed0d52C5944C7BF92feDC87FEC49D474ee133ce) 🚀  
Cấp hCRV vào Convex Finance để kiếm CRV và "gặt" CVX. Phần thưởng được thu hoạch, bán để lấy thêm hCRV rồi ký gửi tiếp vào lại kho bạc.

![](35.png)

### Kho bạc Bể Curve USDK ([yvCurve-USDK](https://etherscan.io/address/0x3D27705c64213A5DcD9D26880c1BcFa72d5b6B0E))

[Curveusdk3CRVVoterProxy](https://etherscan.io/address/0x096E2F730c6AB7a048de7d27507E5E4e864c6824)🚀  
Kho bạc này nhận ký gửi là các tôken [usdk3CRV](https://etherscan.io/address/0x97E2768e8E73511cA874545DC5Ff8067eB19B787) lấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3crv) hay USDK vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/usdk/deposit) và thu lại tôken usdk3CRV. usdk3CRV được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm usdk3CRV.

[Convexusdk3CRV](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
Cấp usdk3CRV cho [Convex Finance](https://www.convexfinance.com/stake) để kiếm CRV và CVX. Tôken thưởng được thu hoạch, bán để lấy thêm usdk3CRV và ký gửi tiếp vào lại chiến lược.

![](36.png)

### Kho bạc Bể Curve Pax ([yvCurve-Pax](https://etherscan.io/address/0x80bbeE2fa460dA291e796B9045e93d19eF948C6A))

[CurveypaxCrvVoterProxy](https://etherscan.io/address/0x60A335509E75175E0fF785091f1Baf979148A290)🚀  
Kho bạc này nhận ký gửi là các tôken [ypaxCrv](https://etherscan.io/address/0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8) lấy được từ việc cấp DAI, USDC, USDT (hoặc phiên bản "gói" của chúng ở IronBank: ycDAI, ycUSDC, ycUSDT) hay PAX vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/pax/deposit) và thu lại tôken ypaxCrv. ypaxCrv được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ypaxCrv.

[ConvexypaxCrv](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
Cấp ypaxCrv cho [Convex Finance](https://www.convexfinance.com/stake) để kiếm CRV và CVX. Tôken thưởng được thu hoạch, bán để lấy thêm ypaxCrv và ký gửi tiếp vào lại chiến lược.

![](37.png)

### Kho bạc Bể Curve RSV ([yvCurve-RSV](https://etherscan.io/address/0xC116dF49c02c5fD147DE25Baa105322ebF26Bd97))

[Curversv3CRVVoterProxy](https://etherscan.io/address/0x57D2E2eD281650A5d987E6ef87BC1BeD4fD0E959)🚀  
Kho bạc này nhận ký gửi là các tôken [rsv3CRV](https://etherscan.io/address/0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35) lấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3crv) hay RSV vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/rsv/deposit) và thu lại tôken rsv3CRV. rsv3CRV được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV và RSR. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm rsv3CRV.

[Convexrsv3CRV](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
Cấp rsv3CRV cho [Convex Finance](https://www.convexfinance.com/stake) để kiếm CRV và CVX. Tôken thưởng được thu hoạch, bán để lấy thêm rsv3CRV và ký gửi tiếp vào lại chiến lược.

![](38.png)

### Kho bạc Bể Curve USDT ([yvCurve-USDT](https://etherscan.io/address/0x28a5b95C101df3Ded0C0d9074DB80C438774B6a9))

[CurvecDAI+cUSDC+USDTVoterProxy](https://etherscan.io/address/0x5Fa22A8527Ae20f4ed8Ed3E0a6A5359Ad5EA3A4e)🚀  
Kho bạc này nhận ký gửi là các tôken [tCrv](https://etherscan.io/address/0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23) lấy được từ việc cấp DAI, USDC (hoặc tôken "gói" tương ứng của chúng ở Compound: cDAI, cUSDC) hay USDT vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/usdt/deposit) và thu lại tôken tCrv. tCrv được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm tCrv.

[ConvexcDAI+cUSDC+USDT](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
Cấp tCrv cho [Convex Finance](https://www.convexfinance.com/stake) để kiếm CRV và CVX. Tôken thưởng được thu hoạch, bán để lấy thêm tCrv và ký gửi tiếp vào lại chiến lược.

![](39.png)

### Kho bạc Bể Curve triCrypto ([yvCurve-triCrypto](https://etherscan.io/address/0x3D980E50508CFd41a13837A60149927a11c03731))

_Dù kho bạc này không bị lỗ tạm thời (`impermanent loss`), bể Curve nền tương ứng có thể gặp vấn đề đó khi rút. Hãy cẩn thận._

[CurvecrvTricryptoVoterProxy](https://etherscan.io/address/0xb9267f1427Ddb937003b9cA0Ca7716DDa4026D19) 🚀  
Kho bạc này nhận ký gửi là các tôken [crvTricrypto](https://etherscan.io/address/0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF) lấy được từ việc cấp USDT, wBTC hoặc ETH  vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/tricrypto/deposit) và thu lại tôken crvTricrypto. crvTricrypto được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm crvTricrypto.

[ConvexcrvTricrypto](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
Cấp crvTricrypto cho [Convex Finance](https://www.convexfinance.com/stake) để kiếm CRV và CVX. Tôken thưởng được thu hoạch, bán để lấy thêm crvTricrypto và ký gửi tiếp vào lại chiến lược.

![](40.png)

### Kho bạc Bể Curve EURS ([yvCurve-EURS](https://etherscan.io/address/0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A))

[CurveeursCRVVoterProxy](https://etherscan.io/address/0x53cE22d5b4F667eC73710d428E828Cd96E9a37C9) 🚀  
Kho bạc này nhận ký gửi là các tôken [eursCRV](https://etherscan.io/address/0x194eBd173F6cDacE046C53eACcE9B953F28411d1) lấy được từ việc cấp EURs hoặc sEUR  vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/eurs/deposit). Tôken eursCRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm eursCRV.

[ConvexeursCRV](https://etherscan.io/address/0x4DC2CCC9E76bD30982243C1cB915003e17a88Eb9) 🚀  
Cấp eursCRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm eursCRV rồi ký gửi tiếp vào lại kho bạc.

![](41.png)

### Kho bạc Bể Curve sUSD ([yvCurve-sUSD](https://etherscan.io/address/0x5a770DbD3Ee6bAF2802D29a901Ef11501C44797A))

[CurvecrvPlain3andSUSDVoterProxy](https://etherscan.io/address/0x9730F52AB5BcEc960bE41b0fE4913a09c0B57066) 🚀  
Kho bạc này nhận ký gửi là các tôken [sCrv](https://etherscan.io/address/0xC25a3A3b969415c80451098fa907EC722572917F) lấy được từ việc cấp sUSD, DAI, USDC hoặc USDT vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/susdv2/deposit). Tôken sCrv được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và SNX. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm sCRV.

[ConvexcrvPlain3andSUSD](https://etherscan.io/address/0xFA773b91b59B0895877c769000b9824b46b13a20) 🚀  
Cấp sCRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm sCRV rồi ký gửi tiếp vào lại kho bạc.

![](42.png)

### Kho bạc Bể Curve AAVE ([yvCurve-Aave](https://etherscan.io/address/0x39CAF13a104FF567f71fd2A4c68C026FDB6E740B))

[Curvea3CRVVoterProxy](https://etherscan.io/address/0xB11FC91DF59ADc604485f1B25ABa1F96A685473f) 🚀  
Kho bạc này nhận ký gửi là các tôken [a3CRV](https://etherscan.io/address/0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900) lấy được từ việc cấp DAI, USDC hoặc USDT (hay phiên bản "gói" aTôken tương ứng của chúng) vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/aave/deposit). Tôken a3CRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm a3CRV.

[Convexa3CRV](https://etherscan.io/address/0xAC4AE0B06C913dF4608dB60E2571a8e91b74C619) 🚀  
Cấp a3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm a3CRV rồi ký gửi tiếp vào lại kho bạc.

![](43.png)

### Kho bạc Bể Curve HUSD ([yvCurve-HUSD](https://etherscan.io/address/0x054AF22E1519b020516D72D749221c24756385C9))

[Curvehusd3CRVVoterProxy](https://etherscan.io/address/0x5ED527A2cfC5411EB63b12E46e270b07b6813824) 🚀  
Kho bạc này nhận ký gửi là các tôken [husd3CRV](https://etherscan.io/address/0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858) lấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3crv) hay HUSD vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/husd/deposit). Tôken husd3CRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm husd3CRV.

[Convexhusd3CRV](https://etherscan.io/address/0xdC929e76081a78e5c32552C2e79D29ECab3F6755) 🚀  
Cấp husd3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm husd3CRV rồi ký gửi tiếp vào lại kho bạc.

![](44.png)

### Kho bạc Bể Curve USDN ([yvCurve-USDN](https://etherscan.io/address/0x3B96d491f067912D18563d56858Ba7d6EC67a6fa))

[Curveusdn3CRVVoterProxy](https://etherscan.io/address/0x23a09D84e50fF3fDFa270308851443734b0a4b6D) 🚀  
Kho bạc này nhận ký gửi là các tôkenlấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3crv) hay USDN vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/usdn/deposit). Tôken usdn3CRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm usdn3CRV.

[Convexusdn3CRV](https://etherscan.io/address/0x8e87e65Cb28c069550012f92d5470dB6EB6897c0) 🚀  
Cấp usdn3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm usdn3CRV rồi ký gửi tiếp vào lại kho bạc.

![](45.png)

### Kho bạc Bể Curve rETH ([yvCurve-rETH](https://etherscan.io/address/0xBfedbcbe27171C418CDabC2477042554b1904857))

[CurverCRVVoterProxy](https://etherscan.io/address/0x16468a3999d931Dd6b6ffA0086Cf195D6C5BDAFA) 🚀  
Kho bạc này nhận ký gửi là các tôken [rCRV](https://etherscan.io/address/0x53a901d48795C58f485cBB38df08FA96a24669D5) lấy được từ việc cấp ETH hoặc rETH vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/reth/deposit). Tôken rCRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và [FIS](https://www.coingecko.com/en/coins/stafi). Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm rCRV.

[ConvexrCRV](https://etherscan.io/address/0x8E4AA2E00694Adaf37f0311651262671f4d7Ac16) 🚀  
Cấp rCRV cho Convex Finance để kiếm CRV, CVX & FIS. Phần thưởng được thu hoạch, bán để lấy thêm rCRV rồi ký gửi tiếp vào lại kho bạc.

![](46.png)

### Kho bạc Bể Curve ankrETH ([yvCurve-ankrETH](https://etherscan.io/address/0x132d8D2C76Db3812403431fAcB00F3453Fc42125))

[CurveankrCRVVoterProxy](https://etherscan.io/address/0x32EF165F2ABbdbE7dcC25B86EdB14a2C0dc52571) 🚀  
Kho bạc này nhận ký gửi là các tôken [ankrCRV](https://etherscan.io/address/0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf) lấy được từ việc cấp ETH hoặc ankrETH vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/ankreth/deposit). Tôken ankrCRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV, [ANKR](https://www.coingecko.com/en/coins/ankr-network) và [ONX](https://www.coingecko.com/en/coins/onx-finance). Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ankrCRV.

[ConvexankrCRV](https://etherscan.io/address/0xB194dCFF4E11d26919Ce3B3255F69aEca5951e88) 🚀  
Cấp ankrCRV cho Convex Finance để kiếm CRV, CVX, ANKR & ONX. Phần thưởng được thu hoạch, bán để lấy thêm ankrCRV rồi ký gửi tiếp vào lại kho bạc.

![](47.png)

### Kho bạc Bể Curve LINK ([yvCurve-LINK](https://etherscan.io/address/0xf2db9a7c0ACd427A680D640F02d90f6186E71725))

[CurvelinkCRVVoterProxy](https://etherscan.io/address/0x0E94D346D8A53FEF83484b178a581695E0001E55) 🚀  
Kho bạc này nhận ký gửi là các tôken [linkCRV](https://etherscan.io/address/0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a) lấy được từ việc cấp LINK hoặc sLINK vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/link/deposit). Tôken linkCRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm linkCRV.

[ConvexlinkCRV](https://etherscan.io/address/0xb7f013426d33fe27e4E8ABEE58500268554736bD) 🚀  
Cấp linkCRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm linkCRV rồi ký gửi tiếp vào lại kho bạc.

![](48.png)

### Kho bạc Bể Curve alUSD ([yvCurve-alUSD](https://etherscan.io/address/0xA74d4B67b3368E83797a35382AFB776bAAE4F5C8))

[CurvealUSD3CRV-fVoterProxy](https://etherscan.io/address/0x31CD90D60516ED18750bA49b2C9d1053190F40d9) 🚀  
Kho bạc này nhận ký gửi là các tôken [alUSD3CRV-f](https://etherscan.io/address/0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c) lấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3crv) hay alUSD vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/alusd/deposit). Tôken alUSD3CRV-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và [ALCX](https://www.coingecko.com/en/coins/alchemix). Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm alUSD3CRV-f.

[ConvexalUSD3CRV-f](https://etherscan.io/address/0xf8Fb278DeeaF30Ff3F6326d928A61eA8b9397d16) 🚀  
Cấp alUSD3CRV-f cho Convex Finance để kiếm CRV, CVX & ALCX. Phần thưởng được "thu hoạch", bán để lấy thêm alUSD3CRV-f và ký gửi tiếp vào lại kho bạc.

![](49.png)

### Kho bạc Bể Curve USDP ([yvCurve-USDP](https://etherscan.io/address/0xC4dAf3b5e2A9e93861c3FBDd25f1e943B8D87417))

[Curveusdp3CRVVoterProxy](https://etherscan.io/address/0x94fA3A90E680f6b866545C904D1dc9DEe6416de9) 🚀  
Kho bạc này nhận ký gửi là các tôken [usdp3CRV](https://etherscan.io/address/0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6) lấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3crv) hay USDP vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/usdp/deposit). Tôken usdp3CRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm usdp3CRV.

[Convexusdp3CRV](https://etherscan.io/address/0xfb0702469A1a0440E87C06605461E8660FD0F43d) 🚀  
Cấp usdp3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm usdp3CRV rồi ký gửi tiếp vào lại kho bạc.

![](50.png)

### Kho bạc Bể Curve UST ([yvCurve-UST](https://etherscan.io/address/0x1C6a9783F812b3Af3aBbf7de64c3cD7CC7D1af44))

[Curveust3CRVVoterProxy](https://etherscan.io/address/0xbf811462955DEeD9aaD62EFE771E34e8B5811857) 🚀  
Kho bạc này nhận ký gửi là các tôken [ust3CRV](https://etherscan.io/address/0x94e131324b6054c0D789b190b2dAC504e4361b53) lấy được từ việc cấp UST, DAI, USDC, USDT (hoặc tôken "gói" 3Crv) vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/ust/deposit). Tôken ust3CRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ust3CRV.

[Convexust3CRV](https://etherscan.io/address/0x0921E388e86bbE0356e37413F946ccE47EDd294D) 🚀  
Cấp ust3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm ust3CRV rồi ký gửi tiếp vào lại kho bạc.

![](51.png)

### Kho bạc Bể Curve DUSD ([yvCurve-DUSD](https://etherscan.io/address/0x30FCf7c6cDfC46eC237783D94Fc78553E79d4E9C))

[Curvedusd3CRVVoterProxy](https://etherscan.io/address/0x4C547b6202247E7B7c45A95d7747A85704530ab3) 🚀  
Kho bạc này nhận ký gửi là các tôken [dusd3CRV](https://etherscan.io/address/0x3a664ab939fd8482048609f652f9a0b0677337b9) lấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3CRV) hay DUSD vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/dusd/deposit). Tôken dusd3CRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và [DFD](https://www.coingecko.com/en/coins/defidollar-dao). Phần thưởng CRV và DFD được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm dusd3CRV.

[Convexdusd3CRV](https://etherscan.io/address/0x33d7E0Fa2c7Db85Ef3AbC1C44e07E0b5cB2E4C14) 🚀  
Cấp dusd3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm dusd3CRV rồi ký gửi tiếp vào lại kho bạc.

![](52.png)

### Kho bạc Bể Curve TUSD ([yvCurve-TUSD](https://etherscan.io/address/0xf8768814b88281DE4F532a3beEfA5b85B69b9324))

[CurveTUSD3CRV-fVoterProxy](https://etherscan.io/address/0xE7C32D413341bfc84BB58492BEA8a69e8D06E0b4) 🚀  
Kho bạc này nhận ký gửi là các tôken [TUSD3CRV-f](https://etherscan.io/address/0xecd5e75afb02efa118af914515d6521aabd189f1) lấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3crv) hay TUSD vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/tusd/deposit). Tôken TUSD3CRV-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm TUSD3CRV-f.

[ConvexTUSD3CRV-f](https://etherscan.io/address/0x270101459e9A38Db38Ba4Cb8718FfA31953A9Af3) 🚀  
Cấp TUSD3CRV-f cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm TUSD3CRV-f và ký gửi tiếp vào lại kho bạc.

![](53.png)

### Kho bạc Bể Curve Y ([yUSD](https://etherscan.io/address/0x4B5BfD52124784745c1071dcB244C6688d2533d3))

[CurveyDAI+yUSDC+yUSDT+yTUSDVoterProxy](https://etherscan.io/address/0x6d45c5a8C1cF1f77Ab89cAF8D44917730298bab7) 🚀  
Kho bạc này nhận ký gửi là các tôken [yDAI+yUSDC+yUSDT+yTUSD](https://etherscan.io/address/0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8) lấy được từ việc cấp DAI, USDC, USDT hay TUSD (hoặc tôken "gói" tương ứng của chúng từ [yEarn: y.curve.fi](https://v1.yearn.finance/earn)) vào bể thanh khoản trên Curve [tại đây](https://curve.fi/iearn/deposit). Tôken yDAI+yUSDC+yUSDT+yTUSD được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm yDAI+yUSDC+yUSDT+yTUSD.

[ConvexyDAI+yUSDC+yUSDT+yTUSD](https://etherscan.io/address/0xA5189cb0149761A8346D64E384924b2394dFa595) 🚀  
Cấp yDAI+yUSDC+yUSDT+yTUSD cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm yDAI+yUSDC+yUSDT+yTUSD và ký gửi tiếp vào lại kho bạc.

![](54.png)

### Kho bạc Bể Curve 3Pool ([yvCurve-3pool](https://etherscan.io/address/0x84E13785B5a27879921D6F685f041421C7F482dA))

[Curve3CrvVoterProxy](https://etherscan.io/address/0x9d7c11D1268C8FD831f1b92A304aCcb2aBEbfDe1) 🚀  
Kho bạc này nhận ký gửi là các tôken [3crv](https://etherscan.io/address/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490) lấy được từ việc cấp DAI, USDC, USDT vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/3pool/deposit). Tôken 3crv được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm 3crv.

[Convex3Crv](https://etherscan.io/address/0xeC088B98e71Ba5FFAf520c2f6A6F0153f1bf494B) 🚀  
Cấp 3crv cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm 3crv rồi ký gửi tiếp vào lại kho bạc.

![](55.png)

### Kho bạc Bể Curve GUSD ([yvCurve-GUSD](https://etherscan.io/address/0x2a38B9B0201Ca39B17B460eD2f11e4929559071E))

[Curvegusd3CRVVoterProxy](https://etherscan.io/address/0x9C1117cf2ED3A0F4A9F069001F517c1D511c8B53) 🚀  
Kho bạc này nhận ký gửi là các tôken [gusd3CRV](https://etherscan.io/address/0xd2967f45c4f384deea880f807be904762a3dea07) lấy được từ việc cấp DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: 3crv) hay GUSD vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/gusd/deposit). Tôken gusd3CRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm gusd3CRV.

[Convexgusd3CRV](https://etherscan.io/address/0x2D42CFdC6a1B03490892AdF7DC6c62AA7228E5D6) 🚀  
Cấp gusd3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm gusd3CRV rồi ký gửi tiếp vào lại kho bạc.

![](56.png)

### Kho bạc Bể Curve Iron Bank ([yvCurve-IB](https://etherscan.io/address/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7))

[StrategyCurveIBVoterProxy](https://etherscan.io/address/0x5148C3124B42e73CA4e15EEd1B304DB59E0F2AF7) 🚀  
Kho bạc này nhận ký gửi là các tôken [ib3CRV](https://etherscan.io/address/0x5282a4eF67D9C33135340fB3289cc1711c13638C) lấy được từ việc cấp cyDAI, cyUSDC hoặc cyUSDT vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/ib/deposit). ib3CRV được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm ib3CRV.

[StrategyConvexIronBank](https://etherscan.io/address/0x864F408B422B7d33416AC678b1a1A7E6fbcF5C8c) 🚀  
Cấp ib3CRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm ib3CRV rồi ký gửi tiếp vào lại kho bạc.

![](57.png)

### Kho bạc Bể Curve sETH ([yveCRV](https://etherscan.io/address/0x986b4AFF588a109c09B50A03f42E4110E29D353F))

[StrategyCurveEcrvVoterProxy](https://etherscan.io/address/0xB5F6747147990c4ddCeBbd0d4ef25461a967D079#code) 🚀 [📺](https://youtu.be/V47NzWeZjjk)  
Kho bạc này nhận ký gửi là các tôken [eCRV](https://etherscan.io/address/0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c) lấy được từ việc cấp ETH hoặc sETH vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/seth/deposit). Tôken eCRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm eCRV.

[StrategyConvexsETH](https://etherscan.io/address/0xc2fC89E79D4Fd2570dD9B413b851F38076bCd930) 🚀  
Cấp eCRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm eCRV rồi ký gửi tiếp vào lại kho bạc.

![](58.png)

### Kho bạc Bể Curve stETH ([yvsteCRV](https://etherscan.io/address/0xdcd90c7f6324cfa40d7169ef80b12031770b4325))

[StrategystETHCurve](https://etherscan.io/address/0xebfc9451d19e8dbf36aaf547855b4dc789ca793c) 🚀 [📺](https://www.youtu.be/0LyxSrAnIxU&t)  
Kho bạc này nhận ký gửi là các tôken [steCRV](https://etherscan.io/address/0x06325440D014e39736583c165C2963BA99fAf14E) lấy được từ việc cấp ETH hoặc stETH vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/steth/deposit). steCRV được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV và [LDO](https://www.coingecko.com/en/coins/lido-dao). Phần thưởng được bán-đổi (`swap`) thành WETH rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm steCRV.

[StrategyConvexstETH](https://etherscan.io/address/0x6C0496fC55Eb4089f1Cf91A4344a2D56fAcE51e3) 🚀  
Cấp steCRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm steCRV rồi ký gửi tiếp vào lại kho bạc.

![](59.png)

### Kho bạc Bể Curve sBTC ([yvCurve-sBTC](https://etherscan.io/address/0x8414Db07a7F743dEbaFb402070AB01a4E0d2E45e))

[CurvecrvRenWSBTCVoterProxy](https://etherscan.io/address/0xdD92491B9F55620C043d55D25620a7B126451ddD) 🚀  
Kho bạc này nhận ký gửi là các tôken [sbtcCrv](https://etherscan.io/address/0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3) lấy được từ việc cấp renBTC, wBTC hoặc sBTC vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/sbtc/deposit). Tôken sbtcCrv được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm sbtcCrv.

[ConvexcrvRenWSBTC](https://etherscan.io/address/0x7aB4DB515bf258A88Bb14f3685769a0f70B8778f) 🚀  
Cấp sbtcCrv cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm sbtcCrv rồi ký gửi tiếp vào lại kho bạc.

![](60.png)

### Kho bạc Bể Curve renBTC ([yvCurve-renBTC](https://etherscan.io/address/0x7047F90229a057C13BF847C0744D646CFb6c9E1A))

[CurvecrvRenWBTCVoterProxy](https://etherscan.io/address/0x2A94A56fBEE72ACEC39ea0269c1356a8DFbC4765) 🚀  
Kho bạc này nhận ký gửi là các tôken [crvRenWBTC](https://etherscan.io/address/0x49849C98ae39Fff122806C06791Fa73784FB3675) lấy được từ việc cấp renBTC hoặc wBTC vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/ren/deposit). crvRenWBTC được "cọc" (`staked`) vào tỷ xích trên curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm crvRenWBTC.

[ConvexcrvRenWBTC](https://etherscan.io/address/0x7799F476522Ebe259fc525C1A21E84f7Dd551955) 🚀  
Cấp crvRenWBTC cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm crvRenWBTC rồi ký gửi tiếp vào lại kho bạc.

![](61.png)

### Kho bạc Bể Curve oBTC (yvCurve-oBTC)

[CurveoBTC/sbtcCRVVoterProxy](https://etherscan.io/address/0x24579b82E06aBe25C8ffC4Ee6C2dB676e57F1a32) 🚀  
Kho bạc này nhận ký gửi là các tôken [oBTC/sbtcCRV](https://etherscan.io/address/0x2fE94ea3d5d4a175184081439753DE15AeF9d614) lấy được từ việc cấp oBTC, renBTC, wBTC hoặc sBTC vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/obtc/deposit). Tôken oBTC/sbtcCRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và [BOR](https://www.coingecko.com/en/coins/boringdao). Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm oBTC/sbtcCRV.

[ConvexoBTC/sbtcCRV](https://etherscan.io/address/0xDb2D3F149270630382D4E6B4dbCd47e665D78D76) 🚀  
Cấp oBTC/sbtcCRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm oBTC/sbtcCRV rồi ký gửi tiếp vào lại kho bạc.

![](62.png)

### Kho bạc Bể Curve pBTC ([yvCurve-pBTC](https://etherscan.io/address/0x3c5DF3077BcF800640B5DAE8c91106575a4826E6))

[CurvepBTC/sbtcCRVVoterProxy](https://etherscan.io/address/0x04a6E58aAd4Ed8053Ba436B00C02A8a000639e93) 🚀  
Kho bạc này nhận ký gửi là các tôken [pBTC/sbtcCRV](https://etherscan.io/address/0xDE5331AC4B3630f94853Ff322B66407e0D6331E8) lấy được từ việc cấp pBTC, renBTC, wBTC hoặc sBTC vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/pbtc/deposit). Tôken pBTC/sbtcCRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và [PNT](https://www.coingecko.com/en/coins/pnetwork). Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm pBTC/sbtcCRV.

[ConvexpBTC/sbtcCRV](https://etherscan.io/address/0x7b5cb4694b0A299ED2F65db7d87B286461549e84) 🚀  
Cấp pBTC/sbtcCRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm pBTC/sbtcCRV rồi ký gửi tiếp vào lại kho bạc.

![](63.png)

### Kho bạc Bể Curve tBTC ([yvCurve-tBTC](https://etherscan.io/address/0x23D3D0f1c697247d5e0a9efB37d8b0ED0C464f7f))

[Curvetbtc/sbtcCrvVoterProxy](https://etherscan.io/address/0x92D03B12E5f67b0df3B50c7c01c141Bf4BD98eA6) 🚀  
Kho bạc này nhận ký gửi là các tôken [tBTC/sbtcCrv](https://etherscan.io/address/0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd) lấy được từ việc cấp tBTC, renBTC, wBTC hoặc sBTC vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/tbtc/deposit). Tôken tBTC/sbtcCrv được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm tBTC/sbtcCrv.

[Convextbtc/sbtcCrv](https://etherscan.io/address/0x07fb6A53185E2F095253099A47F34CD410eB2A89) 🚀  
Cấp tBTC/sbtcCrv cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm tBTC/sbtcCrv rồi ký gửi tiếp vào lại kho bạc.

![](64.png)

### Kho bạc Bể Curve FRAX ([yvCurve-FRAX](https://etherscan.io/address/0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139#code))

[CurveFRAX3CRV-fVoterProxy](https://etherscan.io/address/0xb622F17e1ba8C51b9BD760Fb37994a55b1e5CD85#code) 🚀  
Kho bạc này nhận ký gửi là các tôken [FRAX3CRV-f](https://etherscan.io/address/0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B) lấy được từ việc cấp FRAX, DAI, USDC hoặc USDT vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/frax/deposit). Tôken FRAX3CRV-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV và [FXS](https://www.coingecko.com/en/coins/frax-share). Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm FRAX3CRV-f.

[ConvexFRAX3CRV-f](https://etherscan.io/address/0x8c312B63Bc4000f61E1C4df4868A3A1f09b31A73) 🚀  
Cấp FRAX3CRV-f cho Convex Finance để kiếm CRV, CVX & FXS. Phần thưởng được "thu hoạch", bán để lấy thêm FRAX3CRV-f và ký gửi tiếp vào lại kho bạc.

![](65.png)

### Kho bạc Bể Curve LUSD ([yvCurve-LUSD](https://etherscan.io/address/0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6#code))

[CurveLUSD3CRV-fVoterProxy](https://etherscan.io/address/0x21e5a745d77430568C074569C06e6c765922626a#code) 🚀  
Kho bạc này nhận ký gửi là các tôken [LUSD3CRV-f](https://etherscan.io/address/0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA) lấy được từ việc cấp LUSD, DAI, USDC hoặc USDT vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/lusd/deposit). Tôken LUSD3CRV-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm LUSD3CRV-f.

[ConvexLUSD3CRV-f](https://etherscan.io/address/0x789685963DF287337759A9FaB65d8c645a3B4cba) 🚀  
Cấp LUSD3CRV-f cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm LUSD3CRV-f và ký gửi tiếp vào lại kho bạc.

![](66.png)

### Kho bạc Bể Curve SAAVE ([yvCurve-sAave](https://etherscan.io/address/0xb4D1Be44BfF40ad6e506edf43156577a3f8672eC#code))

[CurvesaCRVVoterProxy](https://etherscan.io/address/0xE73817de3418bB44A4FeCeBa53Aa835333C550e7#code) 🚀  
Kho bạc này nhận ký gửi là các tôken [saCRV](https://etherscan.io/address/0x02d341CcB60fAaf662bC0554d13778015d1b285C) lấy được từ việc cấp DAI hoặc sUSD vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/saave/deposit). Tôken saCRV được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm saCRV.

[ConvexsaCRV](https://etherscan.io/address/0xF5636591256195414f25d19034B70A4742Fc2A2e) 🚀  
Cấp saCRV cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm saCRV rồi ký gửi tiếp vào lại kho bạc.

![](67.png)

### Kho bạc Bể Curve bBTC ([yvCurve-bBTC](https://etherscan.io/address/0x8fA3A9ecd9EFb07A8CE90A6eb014CF3c0E3B32Ef))

[CurvebBTC/sbtcCRVVoterProxy](https://etherscan.io/address/0xABCBB67Ef2757bCCff074014658d9BD13f559632) 🚀  
Kho bạc này nhận ký gửi là các tôken [bBTC/sbtcCrv](https://etherscan.io/address/0x410e3E86ef427e30B9235497143881f717d93c2A) lấy được từ việc cấp BBTC, renBTC, wBTC hoặc sBTC vào bể thanh khoản tương ứng trên Curve [tại đây](https://www.curve.fi/bbtc/deposit). Tôken bBTC/sbtcCrv được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm bBTC/sbtcCrv.

[ConvexbBTC/sbtcCRV](https://etherscan.io/address/0xE9ac8D34C546CBfdAD98F9a4546Db5fE08D01bF2) 🚀  
Cấp bBTC/sbtcCrv cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm bBTC/sbtcCrv rồi ký gửi tiếp vào lại kho bạc.

![](68.png)

### Kho bạc Bể Curve BUSD ([yvCurve-BUSD](https://etherscan.io/address/0x6Ede7F19df5df6EF23bD5B9CeDb651580Bdf56Ca#code))

[CurveBUSD3CRV-fVoterProxy](https://etherscan.io/address/0xD670439D889f9Eb16497d8D6EA9a5E549ae5bFF5) 🚀  
Kho bạc này nhận ký gửi là các tôken [BUSD3CRV-f](https://etherscan.io/address/0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a) lấy được từ việc cấp BUSD, DAI, USDC, USDT (hoặc tôken "gói" 3Crv) vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/busdv2/deposit). Tôken BUSD3CRV-f được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm BUSD3CRV-f.

[ConvexBUSD3CRV-f](https://etherscan.io/address/0xA44F947e51Ec6456A1d786F82ea5865F87Da9C30) 🚀  
Cấp BUSD3CRV-f cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm BUSD3CRV-f và ký gửi tiếp vào lại kho bạc.

![](69.png)

### Kho bạc Bể Curve yBUSD ([yyDAI+yUSDC+yUSDT+yBUSD](https://etherscan.io/address/0x2994529C0652D127b7842094103715ec5299bBed#code))

[CurveyDAI+yUSDC+yUSDT+yBUSDVoterProxy](https://etherscan.io/address/0xB3E1a513a2fE74EcF397dF9C0E6BCe5B57A961C8) 🚀  
Kho bạc này nhận ký gửi là các tôken [yDAI+yUSDC+yUSDT+yBUSD](https://etherscan.io/address/0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B) lấy được từ việc cấp BUSD, DAI, USDC, USDT (hoặc tôken "gói" tương ứng của chúng: yBUSD, yDAI, yUSDC, yUSDT) vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/busd/deposit). Tôken yDAI+yUSDC+yUSDT+yBUSD được "cọc" (`staked`) vào tỷ xích trên Curve để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm yDAI+yUSDC+yUSDT+yBUSD.

[ConvexyDAI+yUSDC+yUSDT+yBUSD](https://etherscan.io/address/0x3cA0B4d7eedE71061B0bAdb4F0E86E99b0FEa613) 🚀  
Cấp yDAI+yUSDC+yUSDT+yBUSD cho Convex Finance để kiếm CRV và CVX. Phần thưởng được "thu hoạch", bán để lấy thêm yDAI+yUSDC+yUSDT+yBUSD và ký gửi tiếp vào lại kho bạc.

![](70.png)

### Kho bạc Bể Curve Compound ([yvCurve-Compound](https://etherscan.io/address/0xD6Ea40597Be05c201845c0bFd2e96A60bACde267))

[CurvecDAI+cUSDCVoterProxy](https://etherscan.io/address/0xdDAAc8B5Dd65d079b6572e43890BDD8d95bD5cc3) 🚀  
Kho bạc này nhận ký gửi là các tôken [cDAI+cUSDC](https://etherscan.io/address/0x845838df265dcd2c412a1dc9e959c7d08537f8a2) lấy được từ việc cấp DAI hoặc USDC (hay phiên bản "gói" của chúng ở Compound) vào bể thanh khoản tương ứng trên Curve [tại đây](https://curve.fi/compound/deposit). Tôken cDAI+cUSDC được "cọc" (`staked`) vào tỷ xích trên Curve.fi để kiếm phần thưởng CRV. Phần thưởng được bán-đổi (`swap`) thành một trong các tài sản nền rồi tiếp tục cấp vào lại bể thanh khoản nhằm lấy thêm cDAI+cUSDC.

[ConvexcDAI+cUSDC](https://etherscan.io/address/0x2b0b941d98848d6c9C729d944E3B1BD9C00A5529) 🚀  
Cấp cDAI+cUSDC cho Convex Finance để kiếm CRV và CVX. Phần thưởng được thu hoạch, bán để lấy thêm cDAI+cUSDC rồi ký gửi tiếp vào lại kho bạc.

## Kho bạc v1 🏦

**Tất cả các kho bạc phiên bản v1 đã chính thức được nâng cấp lên v2. Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra rồi lựa chọn chiến lược mong muốn để tiếp tục "gặt" hoa lợi.**

## Kho bạc lỗi thời 💤

Những kho bạc (`vault`) này không còn hoạt động nữa hoặc đang trong quá trình cập nhật lên phiên bản mới hơn và dần bị loại bỏ. Các chiến lược có thể bị dừng lại, không nhận ký gửi nữa, hoặc có thể biến mất hoàn toàn khỏi trang web chính.

### Kho bạc v2 YFI ([yvYFI](https://etherscan.io/address/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1#readContract)) — v0.3.2

⚠️ **Kho bạc này đang được nâng cấp lên phiên bản mới hơn.** Chúng tôi khuyên bạn nên di chuyển số dư của mình sang kho v2 YFI — v0.4.2 để tiếp tục thu về hoa lợi tốt nhất.

### Kho bạc v2 DAI ([yvDAI](https://etherscan.io/address/0x19d3364a399d251e894ac732651be8b0e4e85001))[📺](https://youtu.be/4kHgQuTx6_U) — v0.3.0

⚠️ **Kho bạc này đang được nâng cấp lên phiên bản mới hơn.** Chúng tôi khuyên bạn nên di chuyển số dư của mình sang kho v2 DAI — v0.4.2 để tiếp tục thu về hoa lợi tốt nhất.

### Kho bạc v2 WBTC ([yvWBTC](https://etherscan.io/address/0xcb550a6d4c8e3517a939bc79d0c7093eb7cf56b5)) — 0xcb550

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 WBTC để tiếp tục kiếm lãi suất.

### Kho bạc v2 WETH ([yvWETH](https://etherscan.io/address/0xa9fE4601811213c340e850ea305481afF02f5b28)) — 0xa9fe4 — v0.3.2

⚠️ **Kho bạc này đang được nâng cấp lên phiên bản mới hơn.** Chúng tôi khuyên bạn nên di chuyển số dư của mình sang kho v2 WETH — v0.4.2 để tiếp tục thu về hoa lợi tốt nhất.

### Kho bạc v2 HEGIC ([yvHEGIC](https://etherscan.io/address/0xe11ba472f74869176652c35d30db89854b5ae84d))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra.

### Kho bạc v1 TrueUSD ([yTUSD](https://etherscan.io/address/0x37d19d1c4E1fa9DC47bD1eA12f742a0887eDa74a#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Nó đã lỗi thời và sẽ không mang lại bất cứ lợi nhuận nào. Kho v1 TrueUSD đã được thay thế bằng v2 TrueUSD. Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra.

### Kho bạc v1 aLINK ([yaLINK](https://etherscan.io/address/0x29E240CFD7946BA20895a7a02eDb25C210f9f324#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra.

### Kho bạc v1 YFI ([yvYFI](https://etherscan.io/address/0xBA2E7Fed597fd0E3e70f5130BcDbbFE06bB94fe1#code))

⚠️ **Không còn hoạt động với YIP-56: BABY (Mua lại và Xây dựng Yearn).** Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra. Nó sẽ không mang lại bất cứ lợi nhuận nào và bạn không thể biểu quyết với YFI còn nằm trong kho này.

### Kho bạc v1 USDT ([yUSDT](https://etherscan.io/address/0x2f08119C6f07c006695E079AAFc638b8789FAf18#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Nó đã lỗi thời và sẽ không mang lại bất cứ lợi nhuận nào. Kho v1 USDT đã được thay thế bằng v2 USDT. Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra.

### Kho bạc v1 USDC ([yUSDC](https://etherscan.io/address/0x597aD1e0c13Bfe8025993D9e79C69E1c0233522e#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Nó đã lỗi thời và sẽ không mang lại bất cứ lợi nhuận nào. Kho v1 USDC đã được thay thế bằng v2 USDC. Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra.

### Kho bạc v1 LINK ([yLINK](https://etherscan.io/address/0x881b06da56BB5675c54E4Ed311c21E54C5025298#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Kho v1 LINK đã được thay thế bằng v2 LINK. Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra.

### Kho bạc v1 Ethereum ([yvETH](https://etherscan.io/address/0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Kho v1 Ethereum đã được thay thế bằng v2 Ethereum. Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra.

### Kho bạc v1 WETH ([yvWETH](https://etherscan.io/address/0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Nó đã lỗi thời và sẽ không mang lại bất cứ lợi nhuận nào. Kho v1 WETH đã được thay thế bằng v2 WETH. Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra.

### Kho bạc v1 DAI ([yDAI](https://etherscan.io/address/0xACd43E627e64355f1861cEC6d3a6688B31a6F952#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Nó đã lỗi thời và sẽ không mang lại bất cứ lợi nhuận nào. Kho v1 DAI đã được thay thế bằng v2 DAI. Xin vui lòng di chuyển tiền của bạn bằng chức năng `zap`, hoặc rút ra.

### Kho bạc v1 mStable USD ([yvmUSD](https://etherscan.io/address/0xE0db48B4F71752C4bEf16De1DBD042B82976b8C7#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve mUSD để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve hBTC ([yvhCRV](https://etherscan.io/address/0x46AFc2dfBd1ea0c0760CAD8262A5838e803A37e5#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve hBTC để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve USDP ([yvusdp3CRV](https://etherscan.io/address/0x1B5eb1173D2Bf770e50F10410C9a96F7a8eB6e75))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve USDP để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve AnkrETH ([yvankrCRV](https://etherscan.io/address/0xE625F5923303f1CE7A43ACFEFd11fd12f30DbcA4#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve AnkrETH để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve HUSD ([yvhusd3CRV](https://etherscan.io/address/0x39546945695DCb1c037C836925B355262f551f55#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve HUSD để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve BUSD ([yvcrvBUSD](https://etherscan.io/address/0x2994529C0652D127b7842094103715ec5299bBed#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve BUSD để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve USDN ([yvusdn3CRV](https://etherscan.io/address/0xFe39Ce91437C76178665D64d7a2694B0f6f17fE3#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve USDN để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve EURS ([yveursCRV](https://etherscan.io/address/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve EURS để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve sUSD ([yvcrvSUSD](https://etherscan.io/address/0x5533ed0a3b83F70c3c4a1f69Ef5546D3D4713E44#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve sUSD để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve AAVE ([yva3CRV](https://etherscan.io/address/0x03403154afc09Ce8e44C3B185C82C6aD5f86b9ab#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve AAVE để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve 3pool ([yv3Crv](https://etherscan.io/address/0x9cA85572E6A3EbF24dEDd195623F188735A5179f#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve 3Pool để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve LINK ([yvlinkCRV](https://etherscan.io/address/0x96Ea6AF74Af09522fCB4c28C269C26F59a31ced6))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve LINK để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve mUSD ([yvmusd3Crv](https://etherscan.io/address/0x0FCDAeDFb8A7DfDa2e9838564c5A1665d856AFDF#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve mUSD để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve UST ([yvust3CRV](https://etherscan.io/address/0xF6C9E9AF314982A4b38366f4AbfAa00595C5A6fC#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve UST để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve Y ([yUSD](https://etherscan.io/address/0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve Y để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve GUSD ([yvgusd3CRV](https://etherscan.io/address/0xcC7E70A958917cCe67B4B87a8C30E6297451aE98#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve GUSD để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve DUSD ([yvdusd3CRV](https://etherscan.io/address/0x8e6741b456a074F0Bc45B8b82A755d4aF7E965dF#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve DUSD để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve Compound ([yvcDAI+cUSDC](https://etherscan.io/address/0x629c759D1E83eFbF63d84eb3868B564d9521C129#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve Compound để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve sBTC ([ycrvRenWSBTC](https://etherscan.io/address/0x7Ff566E1d69DEfF32a7b244aE7276b9f90e9D0f6))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve sBTC để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve renBTC ([yvcrvRenWBTC](https://etherscan.io/address/0x5334e150B938dd2b6bd040D9c4a03Cff0cED3765#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve renBTC để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve SAAVE ([yvsaCRV](https://etherscan.io/address/0xBacB69571323575C6a5A3b4F9EEde1DC7D31FBc1#code))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve SAAVE để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve bBTC ([ycrvbBTC](https://etherscan.io/address/0xA8B1Cb4ed612ee179BDeA16CCa6Ba596321AE52D))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve bBTC để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve pBTC ([ycrvpBTC](https://etherscan.io/address/0x123964EbE096A920dae00Fb795FFBfA0c9Ff4675))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve pBTC để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve tBTC ([ycrvtBTC](https://etherscan.io/address/0x07FB4756f67bD46B748b16119E802F1f880fb2CC))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve tBTC để tiếp tục kiếm lãi suất.

### Kho bạc v1 Bể Curve oBTC ([ycrvoBTC](https://etherscan.io/address/0x7F83935EcFe4729c4Ea592Ab2bC1A32588409797))

⚠️ **Kho bạc này không còn hoạt động nữa.** Hãy rút ra hoặc di chuyển số dư của bạn sang kho v2 Bể Curve oBTC để tiếp tục kiếm lãi suất.

## Giải thích Hệ số Kích thưởng 🚀 Curve

Lấy bể crvCOMP làm ví dụ, những người cấp thanh khoản kiếm được xấp xỉ 12.82% APY từ phí giao dịch, cộng thêm 24.72% APY nữa (ở thời điểm đăng tải ấn bản này) dưới dạng phần thưởng CRV nếu đặt cọc (`stake`) tôken LP tương ứng vào tỷ xích của Curve.

Các bên ký gửi có thể kích thưởng CRV bằng cách khóa CRV vào mô-đun phiếu bầu ký quỹ, với hệ số nhân cao nhất là **2.5x**. Hệ số kích thưởng tùy thuộc vào lượng CRV khóa-cất trong phiếu bầu ký quỹ cũng như lượng tiền ký gửi vào bể thanh khoản. [Bộ tính này](https://dao.curve.fi/minter/calc) khá hữu ích để ước đoán hệ số kích có thể nhận được. Hệ số kích cao nhất cho bể crvCOMP mang lại thêm hoa lợi lên đến 61.81% APY bắt nguồn từ phần thưởng CRV, vốn được thể hiện dưới đây.

![](71.png)

Yearn "cọc" tôken cấp thanh khoản (`liquidity provider token` hay `LP token`) của Curve trong tỷ xích tương ứng, thu về phần thưởng là đồng CRV. 10% phần thưởng được khóa trong kho bạc yveCRV-DAO (mô tả ở phần trước) để tăng hệ số kích cho tất cả kho bạc `yVault` sử dụng các chiến lược liên quan đến Curve.

Để biết thêm chi tiết về hệ số kích thưởng Curve, xin vui lòng xem tư liệu tương ứng của Curve — [tại đây](https://hackmd.io/CawF8dfsSk2OlN7-ubjipQ)

# Kho bạc Fantom 👻

Yearn Finance phát triển thế giới Đa-Chuỗi (`Multi-Chain`)! Các kho bạc của Yearn giờ đã [chính thức phát hành trên mạng Fantom Network](https://beta.yearn.finance/#/vaults)! Giống như `yVault` phiên bản v2, mỗi kho bạc Fantom mới có khả năng vận dụng nhiều chiến lược.

![](72.png)

### ✨ Kho bạc WFTM ([yvWFTM](https://ftmscan.com/address/0x0DEC85e74A92c52b7F708c4B10207D9560CEFaf0))

✨ [StrategyTarotLender](https://ftmscan.com/address/0x1922fde0c9f09cd1aeae20c6021a2c18a9cbd589)  
Cấp wFTM cho [Tarot](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) để kiếm TAROT. Phần thưởng được "thu hoạch", bán để lấy thêm wFTM và ký gửi tiếp vào lại chiến lược.

✨ [StrategyLenderYieldOptimiser](https://ftmscan.com/address/0x695a4a6e5888934828cb97a3a7adbfc71a70922d)  
Cấp wFTM cho [Iron Bank](https://beta.yearn.finance/#/ironbank) hoặc [Scream](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) tùy theo nơi nào có hoa lợi tốt nhất để mang lại lãi suất. Phần thưởng được "thu hoạch", bán để lấy thêm wFTM và ký gửi tiếp vào lại chiến lược.

✨ [ProviderOfWFTMToBooJointOfWFTMUSDC](https://ftmscan.com/address/0xb51a8a88a3ed9e5043e710BFfC8EaD680395566b)  
Dùng wFTM làm một nửa phần cấp thanh khoản chung cho bể USDC-WFTM tại [Spookyswap](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view). Phần thưởng được "thu hoạch" (`harvest`), chia đều, bán để lấy thêm wFTM và ký gửi tiếp vào lại chiến lược.

✨ [GenLevCompV3NoFlash](https://ftmscan.com/address/0x935601c5694f23491921c14aA235c65c2ea2c4DE)  
Cấp wFTM cho [Scream](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) và mượn thêm một lượng wFTM nữa để tối đa hóa thu nhập SCREAM. Phần thưởng SCREAM được thu hoạch, bán để lấy thêm wFTM và ký gửi tiếp vào lại chiến lược.

✨ [Rebalancer WFTM JointProvider WFTM-MIM](https://ftmscan.com/address/0xff3AeA00d3d58ba1a3672c766cc5060FfCb8cca3)  
Dùng wFTM làm một nửa phần cấp thanh khoản chung cho bể Rebalancer WFTM-MIM tại [Beethoven-x](https://www.beets.fi/). Phần thưởng được "thu hoạch" (`harvest`), chia đều, bán để lấy thêm wFTM và ký gửi tiếp vào lại chiến lược.

![](73.png)

### ✨ Kho bạc YFI ([yvYFI](https://ftmscan.com/address/0x2C850cceD00ce2b14AA9D658b7Cad5dF659493Db))

[StrategyLenderYieldOptimiser](https://ftmscan.com/address/0xDf262B43bea0ACd0dD5832cf2422e0c9b2C539dc)  
Cấp YFI cho [Iron Bank](https://beta.yearn.finance/#/ironbank) để thu lãi suất. Phần thưởng được "thu hoạch", bán để lấy thêm YFI và ký gửi tiếp vào lại chiến lược.

![](74.png)

### ✨ Kho bạc DAI ([yvDAI](https://ftmscan.com/address/0x637eC617c86D24E421328e6CAEa1d92114892439))

✨ [StrategyLenderYieldOptimiser](https://ftmscan.com/address/0xd025b85db175EF1b175Af223BD37f330dB277786)  
Cấp DAI cho [Iron Bank](https://beta.yearn.finance/#/ironbank) hoặc [Scream](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) tùy theo nơi nào có hoa lợi tốt nhất để mang lại lãi suất. Phần thưởng được "thu hoạch", bán để lấy thêm wFTM và ký gửi tiếp vào lại chiến lược.

![](75.png)

### ✨ Kho bạc USDC ([yvUSDC](https://ftmscan.com/address/0xEF0210eB96c7EB36AF8ed1c20306462764935607))

✨ [StrategyLenderYieldOptimiser](https://ftmscan.com/address/0x27a5ce447f4E581aE69061E90521da4B5b298818)  
Cấp USDC cho [Iron Bank](https://beta.yearn.finance/#/ironbank) hoặc [Scream](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) tùy theo nơi nào có hoa lợi tốt nhất để mang lại lãi suất. Phần thưởng được "thu hoạch", bán để lấy thêm wFTM và ký gửi tiếp vào lại chiến lược.

![](76.png)

### ✨ Kho bạc MIM ([yvMIM](https://ftmscan.com/address/0x0A0b23D9786963DE69CB2447dC125c49929419d8))

✨ [StrategyLenderYieldOptimiser](https://ftmscan.com/address/0xd0d1f041f93c0ff1091457618e529610c67a76de)  
Cấp MIM cho [Iron Bank](https://beta.yearn.finance/#/ironbank) hoặc [Scream](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) tùy theo nơi nào có hoa lợi tốt nhất để mang lại lãi suất. Phần thưởng được "thu hoạch", bán để lấy thêm MIM và ký gửi tiếp vào lại chiến lược.

✨ [Rebalancer WFTM JointProvider WFTM-MIM](https://ftmscan.com/address/0xab1d2abbe31fa5945bfa0864f29daddcb9cd9eac)  
Dùng MIM làm một nửa phần cấp thanh khoản chung cho bể Rebalancer WFTM-MIM tại [Beethoven-x](https://www.beets.fi/). Phần thưởng được "thu hoạch" (`harvest`), chia đều, bán để lấy thêm MIM và ký gửi tiếp vào lại chiến lược.
