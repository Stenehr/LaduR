using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddedVendor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vendors",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vendors", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Vendors",
                columns: new[] { "Id", "Address", "Name" },
                values: new object[] { 1, "Tondi 4", "K-Rauta" });

            migrationBuilder.InsertData(
                table: "Vendors",
                columns: new[] { "Id", "Address", "Name" },
                values: new object[] { 2, "Tuuliku tee 2", "Espak" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vendors");
        }
    }
}
