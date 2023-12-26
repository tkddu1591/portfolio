package com.example.back.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "about_me")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class AboutMeEntity {
    @Id
    private String title;
    private String iTag;
    private String content;
    private Boolean isATag;
}
