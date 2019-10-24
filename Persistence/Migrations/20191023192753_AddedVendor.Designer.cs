﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20191023192753_AddedVendor")]
    partial class AddedVendor
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0");

            modelBuilder.Entity("Domain.ProductName", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("ProductNames");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Haamer"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Nuga"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Kaabel"
                        });
                });

            modelBuilder.Entity("Domain.Vendor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Vendors");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "Tondi 4",
                            Name = "K-Rauta"
                        },
                        new
                        {
                            Id = 2,
                            Address = "Tuuliku tee 2",
                            Name = "Espak"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}