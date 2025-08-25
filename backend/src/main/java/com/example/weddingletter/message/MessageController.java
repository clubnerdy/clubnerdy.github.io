package com.example.weddingletter.message;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*") // 개발용. 배포 후 깃허브 페이지 도메인으로 제한 추천
public class MessageController {
    private final MessageRepository repo;
    public MessageController(MessageRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Message> list() {
        return repo.findAll().stream()
                .sorted((a,b) -> b.getCreatedAt().compareTo(a.getCreatedAt()))
                .toList();
    }

    @PostMapping
    public Message create(@Valid @RequestBody CreateReq req) {
        var m = new Message();
        m.setNickname(req.nickname().trim());
        m.setContent(req.content().trim());
        return repo.save(m);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { repo.deleteById(id); }

    @PatchMapping("/{id}")
    public Message update(@PathVariable Long id, @RequestBody UpdateReq req) {
        var m = repo.findById(id).orElseThrow();
        if (req.nickname()!=null) m.setNickname(req.nickname().trim());
        if (req.content()!=null)  m.setContent(req.content().trim());
        return repo.save(m);
    }

    public record CreateReq(@NotBlank String nickname, @NotBlank String content) {}
    public record UpdateReq(String nickname, String content) {}
}

