PGDMP     6                     y            Incident    13.1    13.1     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    57360    Incident    DATABASE     n   CREATE DATABASE "Incident" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "Incident";
                postgres    false            ?            1259    73744    customer    TABLE     ?   CREATE TABLE public.customer (
    id bigint NOT NULL,
    email character varying(255),
    password character varying(255),
    username character varying(255)
);
    DROP TABLE public.customer;
       public         heap    postgres    false            ?            1259    73752    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            ?            1259    81936    ticket    TABLE     ?  CREATE TABLE public.ticket (
    id bigint NOT NULL,
    created_date character varying(255),
    description character varying(255),
    priority character varying(255),
    status character varying(255),
    title character varying(255),
    type character varying(255),
    updated_date character varying(255),
    create_date character varying(255),
    created_by character varying(255),
    update_date character varying(255)
);
    DROP TABLE public.ticket;
       public         heap    postgres    false            ?          0    73744    customer 
   TABLE DATA           A   COPY public.customer (id, email, password, username) FROM stdin;
    public          postgres    false    200          ?          0    81936    ticket 
   TABLE DATA           ?   COPY public.ticket (id, created_date, description, priority, status, title, type, updated_date, create_date, created_by, update_date) FROM stdin;
    public          postgres    false    202   ?       ?           0    0    hibernate_sequence    SEQUENCE SET     @   SELECT pg_catalog.setval('public.hibernate_sequence', 2, true);
          public          postgres    false    201            )           2606    73751    customer customer_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pkey;
       public            postgres    false    200            +           2606    81943    ticket ticket_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.ticket DROP CONSTRAINT ticket_pkey;
       public            postgres    false    202            ?   _   x?3?L,J??,qH?M???K???T1JT14P1.??46
*??

?4???ҫLK?K?tOMu?M-?s	r?*3?wˌps?*??????? T*?      ?   W   x?3????L?,*.QHI-N.?,(?????MM?,??t.JM,IM?*(?,?I?,IM???LN??40?"##C?Ģ???? W? N??     