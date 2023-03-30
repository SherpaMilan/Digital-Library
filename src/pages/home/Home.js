import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Hero } from "../../components/home/Hero";
import { CustomeCard } from "../../components/custom-card/CustomeCard";
import { Container, Form } from "react-bootstrap";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Container>
        <div className="card-section mt-5">
          <div className="py-4 d-flex justify-content-between">
            <h3>Brows Library</h3>
            <div className="w-10">
              <Form.Control type="text" placeholder="Search" name="" id="" />
            </div>
          </div>

          <div className="d-flex gap-4 flex-wrap">
            <CustomeCard
              title="Think and Grow Rich"
              img="https://books.google.com.au/books/content?id=T_oeYHNi9EUC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70W_8DEhlyyPc3o1bs1Kh0jK2IwkM0exgkwGhJNT1EbvhDlwD8Ilns8YCRUvpj-UdYvUlI2J2h_BIr1O432L2TYYPioBoR5DEuelCoWvoaSeBXmpho3aLRIwD0BJfdL1a8wATGa"
              summary="Think and Grow Rich reveals the secrets that can bring you fortune.  "
            />
            <CustomeCard
              title="Think and Grow Rich"
              img="https://books.google.com.au/books/publisher/content?id=DLcrDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1YMqAqr_QRJhwPR7bA59APZBiA4A&w=1280"
              summary="Think and Grow Rich reveals the secrets that can bring you fortune.  "
            />
            <CustomeCard
              title="Think and Grow Rich"
              img="https://books.google.com.au/books/publisher/content?id=DLcrDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1YMqAqr_QRJhwPR7bA59APZBiA4A&w=1280"
              summary="Think and Grow Rich reveals the secrets that can bring you fortune.  "
            />
            <CustomeCard
              title="Think and Grow Rich"
              img="https://books.google.com.au/books/publisher/content?id=DLcrDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1YMqAqr_QRJhwPR7bA59APZBiA4A&w=1280"
              summary="Think and Grow Rich reveals the secrets that can bring you fortune.  "
            />
            <CustomeCard
              title="Think and Grow Rich"
              img="https://books.google.com.au/books/publisher/content?id=DLcrDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1YMqAqr_QRJhwPR7bA59APZBiA4A&w=1280"
              summary="Think and Grow Rich reveals the secrets that can bring you fortune.  "
            />
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
