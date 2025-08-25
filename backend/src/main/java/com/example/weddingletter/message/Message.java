package com.example.weddingletter.message;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(length=40, nullable=false)
    private String nickname;

    @NotBlank
    @Lob
    @Column(nullable=false)
    private String content;

    @Column(nullable=false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
