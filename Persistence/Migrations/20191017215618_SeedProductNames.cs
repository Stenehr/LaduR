using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedProductNames : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ProductNames",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Haamer" });

            migrationBuilder.InsertData(
                table: "ProductNames",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Nuga" });

            migrationBuilder.InsertData(
                table: "ProductNames",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "Kaabel" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductNames",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ProductNames",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ProductNames",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
