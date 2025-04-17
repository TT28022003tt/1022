// lib/data/aboutSections.tsx
"use client";

import { faInfoCircle, faTasks, faServer, faBriefcase, faFileContract, faUsers, faPhone, faEnvelope, faGlobe, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const sections = [
    {
        id: "intro",
        title: "Giới thiệu chung",
        icon: faInfoCircle,
        content: (
            <div className="space-y-4 text-gray-700">
                <p>
                    Trung tâm Thông tin và giám sát, điều hành thông minh Đà Nẵng (tiền thân là Trung tâm Giao dịch công nghệ thông tin và Truyền thông (theo quyết định số 3316/2011 của UBND thành phố) và Trung tâm Thông tin dịch vụ công (theo Quyết định số 336/QĐ-UBND ngày 18/01/2016)). Trung tâm Thông tin và giám sát, điều hành thông minh Đà Nẵng là đơn vị đầu mối giám sát, vận hành các hệ thống, ứng dụng cung cấp dịch vụ đô thị thông minh; thu thập, tổng hợp, phân tích dữ liệu và thông tin, báo cáo kịp thời phục công tác chỉ đạo, điều hành của lãnh đạo các cấp; tư vấn, hướng dẫn, cung cấp thông tin cho công dân và tổ chức phục vụ chính quyền đô thị tại thành phố Đà Nẵng.
                </p>
                <h2 className="font-bold">Nhiệm vụ, chức năng chính được giao:</h2>
                <ol className="list-decimal pl-5">
                    <li>
                        Tổ chức vận hành hệ thống thiết bị, phần mềm và thực hiện giám sát các dịch vụ đô thị thông minh theo quy định, hướng dẫn của Bộ Thông tin và Truyền thông và UBND thành phố Đà Nẵng. Xây dựng, tiếp nhận, cập nhật, triển khai, vận hành các ứng dụng dịch vụ đô thị thông minh phục vụ triển khai chuyển đổi số, xây dựng thành phố thông minh.
                    </li>
                    <li>
                        Thu thập, tổng hợp thông tin, dữ liệu từ các OC chuyên ngành, OC quận huyện và các hệ thống ứng dụng, hệ thống internet vạn vật (IoT); xử lý, tổng hợp, phân tích dữ liệu, hiển thị trực quan, thống kê, dự báo phục vụ chỉ đạo, điều hành của lãnh đạo các cấp; cung cấp, chia sẻ thông tin, số liệu cho các cơ quan liên quan phục vụ công tác quản lý nhà nước; công khai thông tin cho tổ chức, công dân phục vụ triển khai chính quyền đô thị theo quy định.
                    </li>
                    <li>
                        Cung cấp thông tin, số liệu, kênh thông tin chỉ đạo, điều hành, tổng đài cuộc gọi khẩn cấp… để phục vụ Trung tâm chỉ huy trong trường hợp khẩn cấp.
                    </li>
                    <li>
                        Phát hiện, cảnh báo sớm các sự kiện, tình huống đã diễn ra trong đô thị; thông báo cho các OC chuyên ngành, OC quận huyện; điều phối, giám sát các OC chuyên ngành, OC quận huyện xử lý các vụ việc theo chức năng, nhiệm vụ được giao; tổng hợp tiến độ, kết quả và báo cáo lãnh đạo thành phố.
                    </li>
                    <li>
                        Làm đầu mối liên kết các hệ thống thông tin của thành phố Đà Nẵng; tổ chức, thu nhận và xử lý dữ liệu thông tin kinh tế - xã hội và dịch vụ công của tất cả các sở, ban, ngành, quận, huyện trên địa bàn thành phố; cung cấp và giải đáp cho tổ chức, công dân các thông tin liên quan đến chính sách và dịch vụ hành chính công, liên quan đến kinh tế - xã hội của thành phố.
                    </li>
                    <li>
                        Thực hiện các dịch vụ hoặc liên doanh, liên kết với các tổ chức, cá nhân trong và ngoài nước liên quan đến lĩnh vực hoạt động của Trung tâm theo quy định của pháp luật.
                    </li>
                </ol>
            </div>
        ),
    },
    {
        id: "tasks",
        title: "Hạ tầng kỹ thuật của Trung tâm",
        icon: faTasks,
        content: (
            <div className="space-y-4 text-gray-700">
                <p>
                    Trung tâm Thông tin và giám sát, điều hành thông minh được đầu tư Hệ thống giao tiếp điện tử (Contact Center) hiện đại, chuyên dụng cho chăm sóc khách hàng, bao gồm:
                </p>
                <ul className="list-decimal pl-5 space-y-2">
                    <li>Hệ thống tổng đài điện thoại IP và máy tính, điện thoại IP, v.v… bảo đảm cho 100 bàn/chỗ tiếp nhận và giải đáp thông tin;</li>
                    <li>Cổng nhắn tin (SMS Gateway) với chức năng là nhà cung cấp nội dung trên mạng viễn thông – CP;</li>
                    <li>Cổng Thông tin dịch vụ công (<a href="http://1022.vn" className="text-blue-500 underline">http://1022.vn</a>) để người dân kịp thời tiếp cận các thông tin và thực hiện các dịch vụ công trực tuyến;</li>
                    <li>10 Server (lưu trữ), Firewall (hệ thống tường lửa bảo mật), IPS (hệ thống chống xâm nhập trái phép), hệ thống ghi âm, v.v…;</li>
                    <li>Các phần mềm và ứng dụng đồng bộ như: KM (quản lý thông tin dữ liệu), CRM (quản lý thông tin khách hàng), CMS (báo cáo, thống kê các giao dịch), Billing (tính cước giao dịch vào/ra), IVR/Voicemail (hướng dẫn người dân tự động);</li>
                    <li>Các quy trình chuẩn trong tiếp nhận/giải đáp thông tin; chăm sóc khách hàng.</li>
                </ul>
                <img src="anhabout.png" alt="Hạ tầng kỹ thuật của Trung tâm" className="mt-4 w-full rounded" />
            </div>
        ),
    },
    {
        id: "services",
        title: "Các dịch vụ cung cấp cho doanh nghiệp, tổ chức",
        icon: faBriefcase,
        content: (
            <div className="space-y-4 text-gray-700">
                <ul className="list-decimal pl-5 space-y-2">
                    <li>Dịch vụ về tổng đài chăm sóc, hỗ trợ khách hàng.</li>
                    <li>Dịch vụ tin nhắn, bao gồm:
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                <strong>Dịch vụ nhắn tin MT (Mobile Terminated)</strong>: Cho phép người dùng chủ động nhắn tin đến thuê bao di động của khách hàng nhằm quảng bá các sự kiện, sản phẩm, dịch vụ mới; chăm sóc khách hàng; nhắc nhở thương hiệu; thông tin giảm giá, khuyến mại...
                            </li>
                            <li>
                                <strong>Dịch vụ nhắn tin MO (Mobile Originated)</strong>: Phục vụ nhắn tin để tham gia bình chọn sản phẩm, cuộc thi; tra cứu giá sản phẩm, dịch vụ, tra cứu điểm thi, kết quả xổ số và các thông tin khác…
                            </li>
                        </ul>
                    </li>
                    <li>Dịch vụ khảo sát, điều tra, thu thập thông tin.</li>
                    <li>Dịch vụ tổ chức sự kiện, truyền thông, quảng bá.</li>
                    <li>Dịch vụ số hóa tài liệu.</li>
                    <li>Dịch vụ nhập dữ liệu.</li>
                </ul>
            </div>
        ),
    },
    {
        id: "contracts",
        title: "Các hợp đồng dịch vụ đã triển khai",
        icon: faFileContract,
        content: (
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">TT</th>
                            <th className="border border-gray-300 px-4 py-2">Các hoạt động DV</th>
                            <th className="border border-gray-300 px-4 py-2">Nội dung thực hiện</th>
                            <th className="border border-gray-300 px-4 py-2">Các đơn vị đã hợp tác</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {/* Đầu tiên: Tổng đài hỗ trợ, chăm sóc khách hàng */}
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" >I</td>
                            <td className="border border-gray-300 px-4 py-2" colSpan={3}>Tổng đài hỗ trợ, chăm sóc khách hàng</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" colSpan={4}>Tổng đài phục vụ công ích, miễn phí… UBND thành phố Đà Nẵng</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">1. </td>
                            <td className="border border-gray-300 px-4 py-2">Tổng đài Thông tin dịch vụ công Đà Nẵng</td>
                            <td className="border border-gray-300 px-4 py-2">Cung cấp thông tin về quy định, chính sách, thủ tục hành chính, thông tin KT-XH thành phố</td>
                            <td className="border border-gray-300 px-4 py-2">UBND thành phố Đà Nẵng</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2. </td>
                            <td className="border border-gray-300 px-4 py-2">Tổng đài về thiên tai, bão, lũ</td>
                            <td className="border border-gray-300 px-4 py-2">Cung cấp thông tin về thiên tai, bão, lũ; nhắn tin thông báo đến công dân, tổ chức…</td>
                            <td className="border border-gray-300 px-4 py-2">BCH Phòng, chống thiên tai và tìm kiếm cứu nạn TP Đà Nẵng và tỉnh Thừa Thiên Huế</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">3. </td>
                            <td className="border border-gray-300 px-4 py-2">Kênh hỗ trợ,giải đáp số hóa truyền hình mặt đất (1900 9496)</td>
                            <td className="border border-gray-300 px-4 py-2">Hỗ trợ, giải đáp cho người dân các tỉnh, thành trong cả nước về số hóa truyền hình mặt đất.</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>
                                        Bộ Thông tin và Truyền thông (Trung tâm Thông tin - Cục Viễn thông)
                                    </li>
                                    <li>
                                        UBND TP Đà Nẵng
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" colSpan={4}>Hợp tác với các tổ chức, doanh nghiệp ngoài</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">4. </td>
                            <td className="border border-gray-300 px-4 py-2">Tổng đài CSKH truyền hình cáp Sông Thu</td>
                            <td className="border border-gray-300 px-4 py-2">Chăm sóc và hỗ trợ khách hàng sử dụng dịch vụ truyền hình cáp</td>
                            <td className="border border-gray-300 px-4 py-2">Công ty Cổ phần Truyền hình cáp Sông Thu (nay là Truyền hình VTVcab Chi Nhánh Đà Nẵng)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">5. </td>
                            <td className="border border-gray-300 px-4 py-2">Tổng đài CSKH Garena</td>
                            <td className="border border-gray-300 px-4 py-2">Hỗ trợ người dùng các trò chơi thể thao điện tử.</td>
                            <td className="border border-gray-300 px-4 py-2">Công ty CP Thể thao Việt Nam - Garena</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">6. </td>
                            <td className="border border-gray-300 px-4 py-2">Tổng đài Help Desk</td>
                            <td className="border border-gray-300 px-4 py-2">Hỗ trợ người dùng sử dụng các phần mềm</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>
                                        FPT Software Đà Nẵng
                                    </li>
                                    <li>
                                        Công ty DTT
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">7. </td>
                            <td className="border border-gray-300 px-4 py-2">Tổng đài khảo sát tự động</td>
                            <td className="border border-gray-300 px-4 py-2">Tiếp nhận thông tin phản hồi của người dân về dịch vụ nước sạch</td>
                            <td className="border border-gray-300 px-4 py-2">Trung tâm Quốc gia nước sạch & vệ sinh môi trường nông thôn</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">8. </td>
                            <td className="border border-gray-300 px-4 py-2">Tổng đài CSKH, xử lý sự cố</td>
                            <td className="border border-gray-300 px-4 py-2">Tiếp nhận thông tin và yêu cầu xử lý sự cố của khách hàng</td>
                            <td className="border border-gray-300 px-4 py-2">Trung tâm Phát triển hạ tầng  công nghệ thông tin Đà Nẵng</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">9. </td>
                            <td className="border border-gray-300 px-4 py-2">Tổng đài tuyển sinh chương trình học đại học từ xa, qua mạng, tại chức</td>
                            <td className="border border-gray-300 px-4 py-2">Giới thiệu nội dung tuyển sinh của Tổ chức giáo dục Topica đến các đối tượng tuyển sinh qua Tổng đài</td>
                            <td className="border border-gray-300 px-4 py-2">Tổ chức giáo dục Topica</td>
                        </tr>
                        {/* Dịch vụ tin nhắn */}
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">II</td>
                            <td className="border border-gray-300 px-4 py-2" colSpan={3}>Dịch vụ tin nhắn</td>

                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" colSpan={4}>Do UBND TP triển khai/ Tổng đài phục vụ công ích, miễn phí…</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">1. </td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin công vụ</td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin SMS điều hành, thông báo đến các cơ quan Nhà nước trên địa bàn thành phố</td>
                            <td className="border border-gray-300 px-4 py-2">UBND TP Đà Nẵng</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2. </td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin thông báo</td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin thông báo sau khi hồ sơ hoàn thành</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>
                                        Sở, ban, ngành TP
                                    </li>
                                    <li>
                                        UBND huyện Điện Bàn, Quảng Nam
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">3. </td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin tra cứu các dịch vụ công ích</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>
                                        Tra cứu tình trạng xử lý hồ sơ
                                    </li>
                                    <li>Tra cứu cơ sở sản xuất kinh doanh đã được cấp giấy chứng nhận An toàn thực phẩm
                                    </li>
                                    <li>
                                        Tra cứu lộ trình xe buýt
                                    </li>
                                    <li>Tra cứu phương tiện vi phạm hành chính về trật tự an toàn giao thông</li>
                                    <li>Tra cứu số điện thoại vi phạm quy định về quảng cáo, rao vặt</li>
                                    <li>Tra cứu thông tin về giá đất trên địa bàn thành phố Đà Nẵng</li>
                                    <li>Đăng ký hẹn giờ khám chữa bệnh tại Trung tâm Y tế dự phòng, Bệnh viện công lập, các Trung tâm Y tế trên địa bàn thành phố.</li>
                                </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">Sở Thông tin và Truyền thông Đà Nẵng
                                Xem hướng dẫn tra cứu các dịch vụ công ích tại Cổng thông tin dịch vụ công 1022 : http://1022.vn</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">4. </td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin thông báo thông tin phòng chống thiên tai, bão lũ, …</td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin điều hành hoặc thông báo đến người dân về phòng chống thiên tai, bão lũ…</td>
                            <td className="border border-gray-300 px-4 py-2">Ban Chỉ huy Phòng, chống thiên tai và Tìm kiếm cứu nạn (PCTT và TKCN) TP Đà Nẵng và tỉnh Quảng Nam</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" colSpan={4}>Hợp tác với các tổ chức, doanh nghiệp ngoài</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">5. </td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin học đường</td>
                            <td className="border border-gray-300 px-4 py-2">Tra cứu điểm số; nhắn tin thông báo đến phụ huynh, học sinh</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>Trường Cao đẳng Văn hóa Nghệ thuật Đà Nẵng</li>
                                    <li>rung tâm Tiếng Anh Việt - Mỹ</li>
                                    <li>Hệ thống giáo dục chất lượng cao SKYLINE</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">6. </td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin quảng bá, CSKH</td>
                            <td className="border border-gray-300 px-4 py-2">Nhắn tin quảng bá thương hiệu, sản phẩm, CSKH cho các công ty, doanh nghiệp.</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>Tài chính T&T</li>
                                    <li>Mì quảng ếch Bếp Trang</li>
                                    <li>Bất động sản Mland…</li>
                                </ul>
                            </td>
                        </tr>
                        {/* Dịch vụ điều tra, khảo sát */}
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">III</td>
                            <td className="border border-gray-300 px-4 py-2" colSpan={3}>Dịch vụ điều tra, khảo sát</td>

                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" colSpan={4}>Do UBND TP triển khai/ Tổng đài phục vụ công ích, miễn phí…</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">1.</td>
                            <td className="border border-gray-300 px-4 py-2">Khảo sát mức độ hài lòng của người dân/ doanh nghiệp</td>
                            <td className="border border-gray-300 px-4 py-2">Điều tra, khảo sát, đánh giá mức độ hài lòng của doanh nghiệp đối với dịch vụ công của cơ quan Nhà nước và đánh giá kết quả khảo sát.</td>
                            <td className="border border-gray-300 px-4 py-2">UBND thành phố Đà Nẵng</td>
                        </tr>
                        <tr><td className="border border-gray-300 px-4 py-2">2.</td>
                            <td className="border border-gray-300 px-4 py-2">Khảo sát trực tuyến ứng dụng thương mại điện tử trên địa bàn TP Đà Nẵng</td>
                            <td className="border border-gray-300 px-4 py-2">Điều tra, khảo sát qua mạng/trực tiếp về tình hình ứng dụng thương mại điện tử của doanh nghiệp và đánh giá kết quả khảo sát.</td>
                            <td className="border border-gray-300 px-4 py-2">Sở Công Thương</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">3.</td>
                            <td className="border border-gray-300 px-4 py-2">Khảo sát nhu cầu của doanh nghiệp</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>Điều tra, khảo sát qua mạng/trực tiếp về nhu cầu về nguồn nhân lực, về chính sách ưu đãi, trình độ công nghệ của doanh nghiệp…</li>
                                    <li>Báo cáo đánh giá kết quả khảo sát.</li>
                                </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">Sở, ban, ngành TP</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">4.</td>
                            <td className="border border-gray-300 px-4 py-2">Khảo sát về nhu cầu tiêu dùng hàng Việt của người dân trên địa bàn TP Đà Nẵng</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>Điều tra, khảo sát số liệu qua mạng về nhu cầu tiêu dùng hàng Việt của người dân;</li>
                                    <li>Báo cáo đánh giá kết quả khảo sát.</li>
                                </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">Sở Công Thương</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" colSpan={4}>Hợp tác với các tổ chức, doanh nghiệp ngoài</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">5.</td>
                            <td className="border border-gray-300 px-4 py-2">Khảo sát về ứng dụng CNTT trong doanh nghiệp</td>
                            <td className="border border-gray-300 px-4 py-2">Điều tra, khảo sát, đánh giá số liệu.</td>
                            <td className="border border-gray-300 px-4 py-2">Liên doanh Leading Associates & KDi Asia</td>
                        </tr>
                        <tr><td className="border border-gray-300 px-4 py-2">6.</td>
                            <td className="border border-gray-300 px-4 py-2">Giám sát chất lượng khảo sát mức độ hài lòng của tổ chức, công dân sử dụng dịch vụ công tại tỉnh Quảng Trị (thuộc dự án “Dân chấm điểm”)</td>
                            <td className="border border-gray-300 px-4 py-2">Giám sát chất lượng, báo cáo kết quả khảo sát</td>
                            <td className="border border-gray-300 px-4 py-2">Tổ chức Oxfam tại Việt Nam</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">7.</td>
                            <td className="border border-gray-300 px-4 py-2">Khảo sát thống kê thông tin về viễn thông</td>
                            <td className="border border-gray-300 px-4 py-2">Khảo sát thống kê về mạng lưới, dịch vụ viễn thông</td>
                            <td className="border border-gray-300 px-4 py-2">Cục Viễn thông</td>
                        </tr>

                        {/* Dịch vụ tổ chức sự kiện */}
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">IV</td>
                            <td className="border border-gray-300 px-4 py-2" colSpan={3}>Dịch vụ tổ chức sự kiện, truyền thông, quảng bá</td>

                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" colSpan={4}>Do UBND TP triển khai/ Tổng đài phục vụ công ích, miễn phí…</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">1.</td>
                            <td className="border border-gray-300 px-4 py-2">Bảo trợ thông tin cuộc thi trình diễn pháo hoa quốc tế Đà Nẵng.</td>
                            <td className="border border-gray-300 px-4 py-2">Bảo trợ thông tin: Đường dây nóng DIFF, tuyên truyền nội dung DIFF qua các kênh của Tổng đài</td>
                            <td className="border border-gray-300 px-4 py-2">UBND thành phố Đà Nẵng</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2.</td>
                            <td className="border border-gray-300 px-4 py-2">Truyền thông cải cách hành chính</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>Tổ chức tọa đàm, xây dựng phóng sự; tổ chức cuộc thi, roadshow;</li>
                                    <li>Truyền thông online (email, video clip, mạng xã hội Facebook, Zalo...).</li>
                                </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">UBND thành phố Đà Nẵng</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">3.</td>
                            <td className="border border-gray-300 px-4 py-2">Truyền thông Tuần lễ cấp cao APEC 2017</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>Đường dây nóng tiếp nhận, cung cấp thông tin về Tuần lễ cấp cao APEC</li>
                                    <li>Truyền thông qua Cổng 1022.vn, mạng xã hội, email, roadshow.</li>
                                </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li> UBND thành phố Đà Nẵng</li>
                                    <li>Sở Thông tin và Truyền thông</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">4.</td>
                            <td className="border border-gray-300 px-4 py-2">Truyền thông về lĩnh vực môi trường</td>
                            <td className="border border-gray-300 px-4 py-2">Truyền thông thông tin qua Cổng 1022, infographic, mạng xã hội Facebook, Zalo, roadshow, qua SMS, qua Tổng đài thoại…</td>
                            <td className="border border-gray-300 px-4 py-2">Sở Thông tin và Truyền thông</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2" colSpan={4}>Hợp tác với các tổ chức, doanh nghiệp ngoài</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">5.</td>
                            <td className="border border-gray-300 px-4 py-2">Thực hiện truyền thông qua internet/ Tổng đài</td>
                            <td className="border border-gray-300 px-4 py-2">Truyền thông qua các kênh: Cổng 1022.vn, thư điện tử, tin nhắn, Tổng đài CSKH; mạng xã hội.</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-2">
                                    <li>Ngân hàng SeABank, Ngân hàng liên doanh Việt Nga, Ngân hàng TMCP Công thương (VietinBank)</li>
                                    <li>Truyền hình cáp Sông Thu</li>
                                    <li>Trung tâm Anh ngữ AMA</li>
                                    <li>Nhà hàng An Thạnh, Trúc Lâm Viên…</li>
                                    <li>Công ty TNHH Hệ thống thông tin FPT</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">6.</td>
                            <td className="border border-gray-300 px-4 py-2">Truyền thông chương trình học đại học từ xa, qua mạng, tại chức</td>
                            <td className="border border-gray-300 px-4 py-2">Truyền thông qua Cổng1022.vn, thư điện tử, telesales.</td>
                            <td className="border border-gray-300 px-4 py-2">Tổ chức giáo dục Topica</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">7.</td>
                            <td className="border border-gray-300 px-4 py-2">Tổ chức sự kiện</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul>
                                    <li>Tổ chức các sự kiện thể thao, giải thể thao truyền thống</li>
                                    <li>Tổ chức sự kiện Lễ ký kết hợp tác</li>
                                </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul>
                                    <li>Sở Thông tin và Truyền thông Đà Nẵng</li>
                                    <li>Trung tâm CNTT& TT Đà Nẵng</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
    },
    {
        id: "clients",
        title: "Khách hàng tiêu biểu",
        icon: faUsers,
        content: (
            <div className="keen-slider">
                {["UBND TP Đà Nẵng", "Sở TTTT", "Sở Kế hoạch & Đầu tư", "Doanh nghiệp A", "Tổ chức B"].map((client, index) => (
                    <div key={index} className="keen-slider__slide">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-4 rounded-lg shadow-md text-center"
                        >
                            <p className="text-sm sm:text-base font-semibold text-[#003294]">{client}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "channels",
        title: "Kênh giao tiếp",
        icon: faPhone,
        content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: faPhone, title: "Tổng đài", desc: "1022 (Hỗ trợ 24/7)", url: "tel:1022" },
                    { icon: faGlobe, title: "Website", desc: "1022.vn", url: "http://1022.vn" },
                    { icon: faEnvelope, title: "Email", desc: "hotro@1022.vn", url: "mailto:hotro@1022.vn" },
                    { icon: faComment, title: "Mạng xã hội", desc: "Fanpage 1022 Đà Nẵng", url: "#" },
                ].map((channel, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-4 rounded-lg shadow-md text-center"
                    >
                        <FontAwesomeIcon icon={channel.icon} className="text-2xl text-[#00B3FF] mb-2" />
                        <p className="font-semibold text-[#003294]">{channel.title}</p>
                        <a href={channel.url} className="text-sm text-gray-600 hover:text-[#00B3FF]">{channel.desc}</a>
                    </motion.div>
                ))}
            </div>
        ),
    },
];
