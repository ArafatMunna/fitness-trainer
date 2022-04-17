import React from "react";

const Blog = () => {
    return (
        <div className="container">
            <div className="mt-4">
                <h3>Authentication এবং Authtorization এর মধ্যে পার্থক্য কি?</h3>
                <p>
                    <b>উত্তরঃ</b>
                    <br />
                    <b>Authentication</b>
                    <br />
                    <li>অথেন্টিকেশন ইউজার কে তা যাচাই করে।</li>
                    <li>
                        পাসওয়ার্ড, ওয়ানটাইম পিন, বায়োমেট্রিক তথ্য এবং ইউজার
                        থেকে প্রদত্ত তথ্যের মাধ্যমে অথেন্টিকেশন সম্পন্ন করা হয়।
                    </li>
                    <li>অথোরাইজেশন প্রসেসের আগে অথেন্টিকেশন করা হয়।</li>
                    <li>অথেন্টকেশন ইউজার দ্বারা আংশিক পরিবর্তনযোগ্য।</li>

                    <b>Authorization</b>
                    <br />
                    <li>
                        অথোরাইজেশন নির্ধারন করে কোন ব্যবহারকারী কোন রিসোর্স
                        এক্সেস করতে পারবে।
                    </li>
                    <li>
                        অর্গানাইজেসন কর্তৃক ইমপ্লিমেন্ট এবং মেনশন করা সেটিংসের
                        উপর নির্ভর করে।
                    </li>
                    <li>অথেন্টিকেশনের পর অথোরাইজেশনের কাজ হয়।</li>
                    <li>অথোরাইজেশন ইউজার পরিবর্তন করতে পারে না। </li>
                </p>
            </div>
            <div className="my-4">
                <h3>
                    ফায়ারবেজ কেন ব্যবহার করা হয়? অথেন্টিকেশনের জন্য বিকল্প আর কি
                    কি অপশন রয়েছে?
                </h3>
                <p>
                    <b>উত্তরঃ</b>
                    <br />
                    ফায়ারবেজের মাধ্যমে আমরা অথেন্টিকেশন, হোস্টিং করে থাকি।
                    ফায়ারবেজ অথেন্টিকেশন খুবই সিকিউরড যার জন্যে ইউজারের তথ্য
                    নিরাপদ থাকে। ফায়ারবেজের মাধ্যমে গুগল, গিটহাব, ফেসবুকসহ আরো
                    অনেক থার্ডপার্টি এপের মাধ্যমে অথেন্টিকেশন করা যায়। ফায়ারবেজ
                    ডাটাবেসের সমস্ত ডেটা রিয়েল-টাইম পরিচালনা করে। তাই ডাটাবেস
                    থেকে ডাটা আদান-প্রদান সহজ এবং দ্রুত হয়।
                    <br />
                    অথেন্টিকেশনের জন্যে বিকল্প অপশনগুলো হলোঃ
                    <li>Okta</li>
                    <li>AuthO</li>
                    <li>PingIdentity</li>
                    <li>Authress</li>
                    <li>Amazon Cognito</li>
                </p>
            </div>
            <div>
                <h3>অথেন্টকেশন ছাড়া ফায়ারবেজ আর কি কি সার্ভিস প্রোভাইড করে?</h3>
                <p>
                    <b>উত্তরঃ</b>
                    <br />
                    ফায়ারবেজের অন্যতম ইউজফুল সার্ভিসগুলো হলোঃ
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </p>
            </div>
        </div>
    );
};

export default Blog;