using System.ComponentModel.DataAnnotations;

namespace Interview_project.Models
{
    public class LoginModel
    {
        // Email is required for login
        [Required]
        [EmailAddress]
        public required string Email { get; set; }

        // Password is required for login
        [Required]
        [StringLength(50, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters long.")]
        public required string Password { get; set; }
    }
}
