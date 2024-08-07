﻿using System.Security.Cryptography;
using System.Text;

namespace Server.Helpers;

/// <summary>
/// Helper class to get the hash value of a string
/// </summary>
public static class HashHelper
{
    /// <summary>
    /// Get the sha254Hash value of the input string
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public static string Hash(this string input)
    {
        return ComputeSha256Hash(input);
    } 
    
    /// <summary>
    /// Compute the Sha256Hash value
    /// </summary>
    /// <param name="rawData"></param>
    /// <returns></returns>
    private static string ComputeSha256Hash(string rawData)
    {
        // Create a SHA256   
        using SHA256 sha256Hash = SHA256.Create();
        
        // ComputeHash - returns byte array  
        byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));  
  
        // Convert byte array to a string   
        StringBuilder builder = new StringBuilder();  
        for (int i = 0; i < bytes.Length; i++)  
        {  
            builder.Append(bytes[i].ToString("x2"));  
        }  
        return builder.ToString();
    } 
}