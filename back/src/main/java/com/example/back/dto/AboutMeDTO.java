package com.example.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AboutMeDTO {
    private String title;
    private String iTag;
    private String content;
    private Boolean isATag;
}
