using System.ComponentModel.DataAnnotations;

namespace Interview_project.Models
{
    public class LoginModel
    {
        // Email is required for login
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        // Password is required for login
        [Required]
        [StringLength(50, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters long.")]
        public string Password { get; set; }
    }
}
